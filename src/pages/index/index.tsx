import { useCallback, useState, useEffect } from "react"
import Taro, { useDidHide } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { useVideoUrl } from "~/module/video"
import { useStatus } from "~/module/state"
import Recorder from 'recorder-core'
import 'recorder-core/src/engine/pcm'
// import 'recorder-core/src/engine/mp3'
// import 'recorder-core/src/engine/mp3-engine'
import { Preset } from "./preset"
import { Answer } from "./answer"
import { AIVideo } from "./aiVideo"
import { Mask, RecordBtn } from "./recordBtn"
import "./style.css"

const Page: FC = () => {
  const [status, action] = useStatus()

  const [message, setMessage] = useState("")
  const { URL: videoUrl, answer, appId } = useVideoUrl(message, status)
  const [recorder, setRecorder] = useState(Recorder({type:"pcm",sampleRate:16000,bitRate:16}))

  const handleRecordMsg = useCallback(
    msg => {
      setMessage(msg)
      if (!msg) {
        action.done()
      } else {
        action.play()
      }
    },
    [action]
  )

  const handleStart = useCallback(async () => {
    console.log("start recording")
    recorder.start()
    action.record()
  }, [action])

  const handleStop = useCallback(async () => {
    console.log("stop recording")
    action.loading()
    recorder.stop((blob,duration) => {
      console.log(blob,(window.URL||webkitURL).createObjectURL(blob),"时长:"+duration+"ms");

      // var reader = new FileReader();
      // reader.readAsDataURL(blob); 
      // reader.onloadend = function() {
      //   var base64data = reader.result.split("base64,")[1];                
      //   console.log(base64data);
        
      //   const data = {
      //     ProjectId: 0, //腾讯云项目 ID
      //     SubServiceType: 2, //一句话识别
      //     SourceType: 1, //语音数据
      //     EngSerViceType: "16k_zh",
      //     VoiceFormat: "pcm", //识别音频的音频格式。
      //     Data: base64data,
      //     UsrAudioKey: "chunni",
      //     FilterDirty:1,//是否过滤脏词
      //     FilterPunc:1,//是否过滤标点符号
      //     FilterModal:1//是否过语气词
      //   };
      //   Taro.request({
      //     url: 'asr.tencentcloudapi.com',
      //     header: {
      //       "X-TC-Version": "2019-06-14",
      //       "X-TC-Region": "ap-shanghai",
      //       "X-TC-Action": "SentenceRecognition",
      //       "X-TC-Timestamp": 1599140479,
      //       "Authorization": ''
      //     },
      //     method: 'POST',
      //     data,
      //     success(response) {
      //       console.log("nlsRes", response)
      //       // const json = JSON.parse(nlsRes.data)
      //       // setMessage(json.result)
      //     },
      //     fail(e) {
      //       console.log(e)
      //       setMessage("")
      //     }
      //   })
      // }

      // Taro.uploadFile({
      //   url: "https://finogeeks-tools.finogeeks.club/mop-nls/upload",
      //   filePath,
      //   name: "file",
      //   formData: { token: "finclip@nls", file: form },
      //   success(nlsRes) {
      //     console.log("nlsRes", nlsRes.data)
      //     const json = JSON.parse(nlsRes.data)
      //     setMessage(json.result)
      //   },
      //   fail(e) {
      //     console.log(e)
      //     setMessage("")
      //   }
      // })
  },function(s){
      console.log("handleStop -> 录音失败");
  });

    // setMessage("12321321321")
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

  useEffect(() => {
    // checkRecordScope()
    recorder.open()
  }, [])

  useDidHide(toIdle)

  return (
    <View
      className={["page","is-wechat"].join(" ")}
    >
      <View className='video-and-text'>
        <AIVideo src={videoUrl} onEnded={handleVideoEnd} onPlay={action.play} />
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
