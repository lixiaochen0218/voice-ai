import { useCallback, useState, useEffect } from "react"
import Taro, { useDidHide } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { useVideoUrl } from "~/module/video"
import { useStatus } from "~/module/state"
import Recorder from 'recorder-core'
import 'recorder-core/src/engine/pcm'
import { Preset } from "./preset"
import { Answer } from "./answer"
import { AIVideo } from "./aiVideo"
import { Mask, RecordBtn } from "./recordBtn"
import "./style.css"

// const STT_END_POINT = 'https://service-cy0mbn4f-1310900042.bj.apigw.tencentcs.com/release/stt';
const STT_END_POINT = 'http://localhost:9000/stt';


const Page: FC = () => {
  const [status, action] = useStatus()

  const [message, setMessage] = useState("")
  const { URL: videoUrl, answer, appId } = useVideoUrl(message, status)
  const [recorder, setRecorder] = useState(Recorder({type:"pcm",sampleRate:16000,bitRate:16}))

  useEffect(() => {
    recorder.open()
  }, [])

  const handleStart = useCallback(async () => {
    console.log("start recording")
    recorder.start()
    action.record()
    // setTimeout(() => recorder.stop(),5000);
  }, [action])

  const handleStop = useCallback(async () => {
    console.log("stop recording")
    action.loading()
    recorder.stop((blob,duration) => {
      console.log(blob,(window.URL||webkitURL).createObjectURL(blob),"时长:"+duration+"ms");

      // const file = new File([blob], 'test.pcm', { type: blob.type })
      // const filePath = (window.URL||webkitURL).createObjectURL(file)
      // console.log(file,filePath)

      var reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = function() {
        var base64data = reader.result.split("base64,")[1];                
        // console.log(base64data);

        Taro.request({
          url: STT_END_POINT,
          method:"POST",
          data:{
            data: base64data
          },
          success:function(res){
              console.log("上传成功",res);
              if (res.data.Result === '') {
                setMessage(" ")
              } else {
                setMessage(res.data.Result)
              }
          },
          fail:function(res){
              console.error("上传失败",res);
              setMessage("")
          }
        });
      }

    },function(s){
        console.log("handleStop -> 录音失败");
    });

  }, [action])

  const toIdle = useCallback(() => {
    setMessage("")
    action.done()
  }, [action])

  const handleSelect = useCallback(
    (message: string) => {
      action.loading()
      setMessage(message)
    },
    [action]
  )

  const handleVideoEnd = useCallback(async () => {
    toIdle()
    if (appId) {
      console.log("appID: " + appId)
      // await Taro.navigateToMiniProgram({ appId, fail(res){
      //   if(res.errMsg.includes('gesture')){
      //     wx.showModal({
      //       content: '请允许打开小程序',
      //       success: function (res) {
      //         if (res.confirm) { //这里是点击了确定以后
      //           Taro.navigateToMiniProgram({ appId })
      //         }
      //       }
      //     })
      //   }
      //   }
      // })
    }
  }, [toIdle, appId])

  useDidHide(toIdle)

  return (
    <View
      className={["page","is-wechat"].join(" ")}
    >
      <View className='video-and-text' onLongPress={toIdle}>
        <AIVideo src={videoUrl} onEnded={handleVideoEnd} onPlay={action.play}/>
        <Answer
          loading={status === "loading"}
          message={message}
          answer={answer}
          show={status !== "idle"}
        />
      </View>

      <Preset
        onSelect={handleSelect}
        show={["start", "idle", "recording"].includes(status)}
      />
      <RecordBtn
        handleStart={handleStart}
        handleStop={handleStop}
        toIdle={toIdle}
        playing={status === "playing"}
        hide={status === "start" || status === "loading"}
        isRecording={status === "recording"}
      />
      <Mask show={status === "recording"} />
    </View>
  )
}

export default Page
