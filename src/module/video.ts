import Taro from "@tarojs/taro"
import stringSimilarity from "string-similarity"
import { useMemo } from "react"
import { defaultUrl, questionArr, questionItem, whoami } from "~/config/dict"
import { statusType } from "./state"

const defaultVal = {
  answer: "",
  URL: defaultUrl
}

export const useVideoUrl = (
  message: string,
  status: statusType
): questionItem => {
  return useMemo(() => {
    if (status === "start") return { answer: "", URL: whoami.URL } as any
    if (status === "idle") return defaultVal
    if (!message) return defaultVal
    const match = questionArr.find(item => message === item.question)
    if (match) return match
    const bestMatch = stringSimilarity.findBestMatch(message, questionArr.map(item => item.keyWords.join(" ")))
    // console.log(bestMatch)
    return questionArr[bestMatch.bestMatchIndex];
  }, [message, status])
}

export const useVideoCtx = (id = "video") => {
  return useMemo(() => Taro.createVideoContext(id), [id])
}
