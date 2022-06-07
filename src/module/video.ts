import Taro from "@tarojs/taro"
import { useMemo } from "react"
import { defaultUrl, noop, questionArr, whoami } from "~/config/dict"
import { statusType } from "./state"

const defaultVal = {
  answer: "",
  URL: defaultUrl
}

export const useVideoUrl = (
  message: string,
  status: statusType
): { URL: string } => {
  return useMemo(() => {
    if (status === "start") return { answer: "", URL: whoami.URL }
    if (status === "idle") return defaultVal
    if (!message) return defaultVal
    const match = questionArr.find(q => message.toLowerCase().includes(q.type))
    return match || noop
  }, [message, status])
}

export const useVideoCtx = (id = "video") => {
  return useMemo(() => Taro.createVideoContext(id), [id])
}
