export const videoBaseUrl =
  "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"
  // "https://community-file.btime.com"

const mingmangBaseUrl = 
"https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"
// "https://community-file.btime.com"

export const defaultUrl = `${mingmangBaseUrl}/chunni_red_demo/chunni_red_demo_idle.mp4`


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
    URL: `${mingmangBaseUrl}/chunni_red_demo/chunni_red_demo_noop.mp4`,
    featured: false
  },
  {
    type: "自我介绍",
    keyWords: ["您好","你好","是谁","名字","自我介绍"],
    question: "你是谁？你的名字是什么？",
    answer: "您好，我是接诉即办推广大使时间小妮",
    URL: "chunni_red_demo/chunni_red_demo_opening.mp4",
    featured: false
  },
  {
    type: "人工服务",
    keyWords: ["人工"],
    question: "",
    answer: "正在为您接入人工服务",
    URL: "chunni_red_demo/chunni_red_demo_person.mp4",
    featured: false,
    appId: "https://mingmang.meme.cool/#/user"
  },
  {
    type: "new demo",
    keyWords: ["如何提交诉求"],
    question: "如何在北京时间接诉即办平台提交诉求？",
    answer:"",
    URL: "chunni_red_demo/chunni_red_demo_1.mp4",
    featured: true
  },
  {
    type: "new demo",
    keyWords: ["提交后的流程"],
    question: "诉求提交后的流程是什么？",
    answer:"",
    URL: "chunni_red_demo/chunni_red_demo_2.mp4",
    featured: true
  },
  {
    type: "new demo",
    keyWords: ["最新接诉即办诉求办件效果展示"],
    question: "最新接诉即办诉求办件效果展示",
    answer:"",
    URL: "chunni_red_demo/chunni_red_demo_3.mp4",
    featured: true
  },
  {
    type: "new demo",
    keyWords: ["进返京"],
    question: "近期进返京政策",
    answer:"",
    URL: "chunni_red_demo/chunni_red_demo_4.mp4",
    featured: true
  },
  {
    type: "new demo",
    keyWords: ["小客车摇号"],
    question: "居民申请北京小客车摇号条件",
    answer:"",
    URL: "chunni_red_demo/chunni_red_demo_5.mp4",
    featured: true
  },
  {
    type: "new demo",
    keyWords: ["社保费缓缴"],
    question: "北京社保费缓缴，如何操作？",
    answer:
      "拨打12345市民服务热线，按一进入健康宝弹窗问题后，将为您接通健康宝智能语音机器人，市民可根据语音提示回答简单信息，获取最新准确的弹窗政策解释服务.",
      URL: "chunni_red_demo/chunni_red_demo_6.mp4",
    featured: true
  }
]

export const noop = questionArr[0]
export const whoami = questionArr[1]
