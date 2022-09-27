import { Image, View } from "@tarojs/components"
import { useEffect, useState } from "react"
import { useAniDelay } from "~/module/animate"

import imgBtnDefault from "~/assets/mingmang_btn_voice_default@x.png"
import imgBtnPress from "~/assets/mingmang_btn_voice_press@x.png"
import imgBtnStop from "~/assets/mingmang_btn_stop_default.png"
import imgRecordAnim_1 from "~/assets/mingmang_record_01@2x.png"
import imgRecordAnim_2 from "~/assets/mingmang_record_02@2x.png"
import imgRecordAnim_3 from "~/assets/mingmang_record_03@2x.png"

const animImgs = [
  imgRecordAnim_1,
  imgRecordAnim_3,
  imgRecordAnim_2,
  imgRecordAnim_3
]

const RecordAnim: FC<{ playing: boolean }> = props => {
  const [idx, setIdx] = useState(0)
  const { show, aniShow } = useAniDelay(props.playing)

  useEffect(() => {
    let timer = 0
    const play = () => {
      if (!show) return
      timer = setTimeout(() => {
        setIdx(num => (num + 1) % 4)
        play()
      }, 200)
    }

    play()

    return () => {
      timer && clearTimeout(timer)
    }
  }, [show])

  if (!show) return null

  return (
    <View
      className={["relative z-index-10", aniShow ? "" : "fade-up"].join(" ")}
    >
      <View className='record-animate'>
        {animImgs.map((imgSrc, index) => {
          return (
            <Image
              key={Math.random()}
              src={imgSrc}
              mode='aspectFit'
              className={[
                "record-animate-img",
                "animate",
                idx === index ? "" : "opacity-0"
              ].join(" ")}
            />
          )
        })}
      </View>
      <View className='record-animate-after' />
    </View>
  )
}

export const RecordBtn: FC<{
  handleStart: () => void
  handleStop: () => void
  toIdle: () => void
  isRecording: boolean
  playing: boolean
  hide: boolean
}> = props => {
  const { playing, handleStart, handleStop, toIdle, hide, isRecording } = props

  const handleClick = () => {
    if (isRecording) {
      handleStop()
    } else {
      handleStart()
    }
  }

  return (
    <View className='record-btn-and-animate'>
      <RecordAnim playing={isRecording} />
      <View className={["record-button", "animate", hide ? "fade-up" : ""].join(" ")}>
        {playing ? 
        <Image 
          className='record-button-img' 
          src={imgBtnStop} 
          onClick={toIdle}/> 
        : 
        <Image 
          className='record-button-img' 
          src={isRecording ? imgBtnPress : imgBtnDefault}
          onTouchStart={handleStart}
          onTouchCancel={handleStop}
          onTouchEnd={handleStop}
          onClick={handleClick}
        />}
      </View>
    </View>
  )
}

export const Mask: FC<{ show: boolean }> = props => {
  const { show, aniShow } = useAniDelay(props.show)
  if (!show) return null
  return (
    <View
      className={["page-mask", "animate", aniShow ? "" : "opacity-0"].join(" ")}
    />
  )
}
