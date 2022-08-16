import { useCallback, useState, useEffect } from "react"
import Taro, { useDidHide } from "@tarojs/taro"
import { View } from "@tarojs/components"
import {
  checkRecordScope,
  startRecord,
  stopRecord,
  useRecordManager
} from "~/module/record"
import { useVideoUrl } from "~/module/video"
import { useStatus } from "~/module/state"
import { sysInfo } from "~/module/system"

import { Preset } from "./preset"
import { Answer } from "./answer"
import { AIVideo } from "./aiVideo"
import { Mask, RecordBtn } from "./recordBtn"
import "./style.css"
import { questionItem } from "~/config/dict"

const Page: FC = () => {
  const [status, action] = useStatus()

  const [message, setMessage] = useState("")
  const [preset, setPreset] = useState("GENERAL")
  const { URL: videoUrl, answer, appId, changeType } = useVideoUrl(message, status)

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

  useRecordManager({ loading: action.loading, setMessage: handleRecordMsg })

  const handleStart = useCallback(async () => {
    const err = await startRecord()
    if (err) return

    action.record()
  }, [action])

  const toIdle = () => {
    if (changeType) {
      setPreset(changeType)
    }
    setMessage("")
    action.done()
  }

  const handleSelect = (item: questionItem) => {
    if (item.question && item.URL) {
        action.loading()
        setMessage(item.question)
      }
      if (item.changeType) {
        setPreset(item.changeType)
      }
      if (item.appId) {
        Taro.navigateToMiniProgram({ appId: item.appId })
      }
  }

  const handleVideoEnd = () => {
    toIdle()
    // if (appId) {
    //   console.log("appID: " + appId)
    //   await Taro.navigateToMiniProgram({ appId, fail(res){
    //     if(res.errMsg.includes('gesture')){
    //       wx.showModal({
    //         content: '请允许打开小程序',
    //         success: function (res) {
    //           if (res.confirm) { //这里是点击了确定以后
    //             Taro.navigateToMiniProgram({ appId })
    //           }
    //         }
    //       })
    //     }
    //     }
    //   })
    // }
  }

  useEffect(() => {
    Taro.showShareMenu({ showShareItems: ["wechatFriends", "wechatMoment"] })
    checkRecordScope()
  }, [])

  useDidHide(toIdle)

  return (
    <View
      className={[
        "page",
        sysInfo.isFinclip ? "is-finclip" : "",
        sysInfo.isWechat ? "is-wechat" : "",
        sysInfo.isAndroid ? "is-android" : ""
      ].join(" ")}
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
        type={preset}
        show={["start", "idle", "recording"].includes(status)}
      />
      <RecordBtn
        onPress={handleStart}
        onEnd={stopRecord}
        onReset={toIdle}
        playing={status === "playing"}
        hide={status === "start" || status === "loading"}
        isRecording={status === "recording"}
      />
      <Mask show={status === "recording"} />
    </View>
  )
}

export default Page
