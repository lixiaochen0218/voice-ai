import { useMemo, useRef, useState } from "react"

export type statusType = "stable" | "start" | "idle" | "recording" | "loading" | "playing"
export const useStatus = () => {
  const [status, setStatus] = useState<statusType>("stable")

  const ref = useRef(status || "")
  ref.current = status || ""

  const action = useMemo(
    () => ({
      start() {
        setStatus("start")
      },
      loading() {
        setStatus("loading")
      },
      record() {
        setStatus("recording")
      },
      done() {
        setStatus("idle")
      },
      play() {
        if (ref.current !== "loading") return
        setStatus("playing")
      }
    }),
    []
  )

  return [status, action] as const
}
