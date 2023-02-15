export const videoBaseUrl =
  "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"
  // "https://community-file.btime.com"

const mingmangBaseUrl = 
"https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"
// "https://community-file.btime.com"

export const defaultUrl = `${mingmangBaseUrl}/shaosuki_yinhe/idle.mp4`


export type questionItem = {
  type: string
  keyWords:string[]
  question: string
  URL: string
  answer: string
  featured: boolean
  appId?: string
}

export const questionArr: questionItem[] = [
  {
    type: "noop",
    keyWords: [],
    question: "",
    answer: "您好，我才刚出生一个月，很多技能还在学习中，换个问题试试吧。",
    URL: `${mingmangBaseUrl}/shaosuki_yinhe/noop.mp4`,
    featured: false
  },
  {
    type: "自我介绍",
    keyWords: ["您好","你好","是谁","名字","自我介绍"],
    question: "你是谁？你的名字是什么？",
    answer: "您好，我是接诉即办推广大使时间小妮",
    URL: "shaosuki_yinhe/opening.mp4",
    featured: false
  },
  {
    type: "yinhe",
    keyWords: ["银河滑雪场", "翠云山", "名称", "来源"],
    question: "为什么叫银河滑雪场？",
    answer:"",
    URL: "shaosuki_yinhe/yinhe_1.mp4",
    featured: true
  },
  {
    type: "yinhe",
    keyWords: ["配套设施", "服务", "亲子", "儿童"],
    question: "滑雪场都有哪些配套设施？",
    answer:"",
    URL: "shaosuki_yinhe/yinhe_2.mp4",
    featured: true
  },
  {
    type: "yinhe",
    keyWords: ["应该选择哪条雪道", "雪道", "缆车", "安全"],
    question: "应该选择哪条雪道？",
    answer:"",
    URL: "shaosuki_yinhe/yinhe_3.mp4",
    featured: true
  }
]

export const noop = questionArr[0]
export const whoami = questionArr[1]
