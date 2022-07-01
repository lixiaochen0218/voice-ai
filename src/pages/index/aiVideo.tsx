import {
  BaseEventOrig,
  Image,
  Video,
  VideoProps,
  View
} from "@tarojs/components"
import { useCallback, useEffect, useRef, useState } from "react"

import { defaultUrl, videoBaseUrl, whoami } from "~/config/dict"
import Taro from "@tarojs/taro"

import imgPoster from "~/assets/poster_chunni.png"
import { withCache } from "~/module/fileCache"

const getFullUrl = (url: string) => {
  const videoUrl = /^http/.test(url) ? url : [videoBaseUrl, url].join("/")
  return videoUrl
}

const PosterVideo: FC = () => {
  const [loaded, setLoaded] = useState(false)

  const handleLoad = useCallback(
    () => setTimeout(() => setLoaded(true), 200),
    []
  )

  return (
    <Video
      id='video-idle'
      key='idle'
      autoplay
      loop
      muted
      className={[
        "video-box video-idle z-index-1",
        !loaded ? "video-hidden" : ""
      ].join(" ")}
      src={getFullUrl(defaultUrl)}
      objectFit='cover'
      onLoadedMetaData={handleLoad}
      controls={false}
      showCenterPlayBtn={false}
      enableProgressGesture={false}
    />
  )
}

export const AIVideo: FC<{
  src: string
  onPlay: () => void
  onEnded: () => void
}> = props => {
  const [hide, setHide] = useState(true)
  const { onEnded, onPlay } = props
  const [delaySrc, setSrc] = useState(whoami.URL)
  const timer = useRef<number>()
  const isDefault = delaySrc === defaultUrl

  const playVideo = useCallback(() => {
    const ctx = Taro.createVideoContext("video-ai")
    ctx.seek(0)
    ctx.play()
    onPlay()
    timer.current = setTimeout(() => setHide(false), 500)
  }, [onPlay])

  useEffect(() => {
    clearTimeout(timer.current)
    setHide(true)
    setTimeout(() => setSrc(props.src), 50)
  }, [props.src])

  const handleEnded = useCallback(() => {
    if (isDefault) return
    setHide(h => {
      if (h) return h
      onEnded()
      return true
    })
  }, [onEnded, isDefault])

  const logError = useCallback(err => console.log("error", err), [])

  const handleTimeUpdate = useCallback(
    (ev: BaseEventOrig<VideoProps.onTimeUpdateEventDetail>) => {
      const { currentTime, duration } = ev.detail
      if (!currentTime || !duration) return
      if (duration - currentTime <= 1) {
        setTimeout(() => handleEnded(), 700)
      }
    },
    [handleEnded]
  )

  return (
    <View className='video-wrapper'>
      <Image
        src={imgPoster}
        mode='aspectFill'
        className='video-box z-index-0'
      />
      <PosterVideo />

      {!isDefault && (
        <Video
          id='video-ai'
          className={["video-box z-index-2", hide ? "video-hidden" : ""].join(
            " "
          )}
          key={delaySrc}
          src={getFullUrl(delaySrc)}
          objectFit='cover'
          controls={false}
          showCenterPlayBtn={false}
          enableProgressGesture={false}
          onLoadedMetaData={playVideo}
          onTimeUpdate={handleTimeUpdate}
          onError={logError}
        />
      )}
    </View>
  )
}
