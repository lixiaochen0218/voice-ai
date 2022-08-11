export const videoBaseUrl =
  "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

const mingmangBaseUrl = "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

export const defaultUrl = `${mingmangBaseUrl}/3d/3d_idle.mp4`

export type questionItem = {
  type: string
  keyWords:string[]
  question: string
  URL: string
  answer: string
  featured: boolean
}

export const questionArr: questionItem[] = [
  {
    type: "noop",
    keyWords: [],
    question: "",
    answer: "您好，我才刚出生一个月，很多技能还在学习中，换个问题试试吧。",
    URL: `${mingmangBaseUrl}/3d/3d_noop.mp4`,
    featured: false
  },
  {
    type: "自我介绍",
    keyWords: ["您好","你好","是谁","名字","自我介绍"],
    question: "你是谁？你的名字是什么？",
    answer: "您好，我是接诉即办推广大使时间小妮",
    URL: "3d/3d_opening.mp4",
    featured: false
  },
  {
    type: "信用卡",
    keyWords: ["办理晋商银行信用卡"],
    question: "如何办理晋商银行信用卡",
    answer: "",
    URL: "3d/3d_credit_1.mp4",
    featured: true
  },
  {
    type: "信用卡",
    keyWords: ["晋商银行","信用卡激活"],
    question: "晋商银行信用卡激活",
    answer: "",
    URL: "3d/3d_credit_2.mp4",
    featured: true
  },
  {
    type: "银行",
    keyWords: ["介绍","建设银行"],
    question: "介绍一下建设银行",
    answer: "",
    URL: "3d/3d_bank_1.mp4",
    featured: true
  },
  {
    type: "银行",
    keyWords: ["建设银行","能办理哪些业务"],
    question: "建设银行能办理哪些业务",
    answer: "",
    URL: "3d/3d_bank_2.mp4",
    featured: true
  },
  {
    type: "市民服务热线(12345)",
    keyWords: ["介绍","市民","服务","热线","一二三四五","12345"],
    question: "介绍市民服务热线(12345)",
    answer:"日前，12345上线最新版智能语音。市民可根据智能语音提示，准确咨询反映问题，获取相关政策解释或人工坐席服务。",
    URL: "3d/3d_12345_1.mp4",
    featured: true
  },
  {
    type: "市民服务热线(12345)",
    keyWords: ["功能","市民","服务","热线","一二三四五","12345"],
    question: "市民服务热线(12345)有哪些功能",
    answer:
      "根据智能语音提示，按一可以咨询健康宝弹窗问题，按二咨询紧急就医救助问题，按三则是咨询反映其他事项。",
    URL: "3d/3d_12345_2.mp4",
    featured: true
  },
  {
    type: "奥密克戎",
    keyWords: ["奥密克戎","变异株","新冠","病毒","预防"],
    question: "奥密克戎变异株",
    answer:
      "我国外防输入，内防反弹的防控策略对奥密克戎变异株仍然有效.中国疾控中心病毒所已针对奥密克戎变异株建立了特异性核酸检测方法，并持续针对可能的输入病例开展病毒基因组监测.上述措施将有利于及时发现可能输入我国的奥密克戎变异株.",
    URL: "3d/3d_omicron.mp4",
    featured: true
  }
]

export const noop = questionArr[0]
export const whoami = questionArr[1]
