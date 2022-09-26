export const videoBaseUrl =
  "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

const mingmangBaseUrl = "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

export const defaultUrl = `${mingmangBaseUrl}/shaosuki/shaosuki2_idle.mp4`

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
    URL: `${mingmangBaseUrl}/shaosuki/shaosuki2_noop.mp4`,
    featured: false
  },
  {
    type: "自我介绍",
    keyWords: ["您好","你好","是谁","名字","自我介绍"],
    question: "你是谁？你的名字是什么？",
    answer: "您好，我是人工智能数字人小琪。",
    URL: "shaosuki/shaosuki2_opening.mp4",
    featured: false
  },
  {
    type: "上海融育学校",
    keyWords: ["何时设立","位于哪里"],
    question: "学校何时设立？位于哪里？",
    answer: "",
    URL: "shaosuki/shaosuki2_school_1.mp4",
    featured: true
  },
  {
    type: "上海融育学校",
    keyWords: ["相比其他国际","有哪些","优势"],
    question: "相比其他国际学校，融育有哪些课程优势？",
    answer: "",
    URL: "shaosuki/shaosuki2_school_2.mp4",
    featured: true
  },
  {
    type: "上海融育学校",
    keyWords: ["学生应该完成多少学分"],
    question: "学生应该完成多少学分？",
    answer: "",
    URL: "shaosuki/shaosuki2_school_3.mp4",
    featured: true
  },
  {
    type: "上海融育学校",
    keyWords: ["主要课程","位于哪里"],
    question: "有哪些主要课程？",
    answer: "",
    URL: "shaosuki/shaosuki2_school_4.mp4",
    featured: true
  },
  {
    type: "上海融育学校",
    keyWords: ["有哪些社团活动"],
    question: "学校有哪些社团活动呢？",
    answer: "",
    URL: "shaosuki/shaosuki2_school_5.mp4",
    featured: true
  },
  // {
  //   type: "银行",
  //   keyWords: ["介绍","建设银行"],
  //   question: "介绍一下建设银行",
  //   answer: "",
  //   URL: "shaosuki/shaosuki_bank_1.mp4",
  //   featured: true
  // },
  // {
  //   type: "银行",
  //   keyWords: ["建设银行","能办理哪些业务"],
  //   question: "建设银行能办理哪些业务",
  //   answer: "",
  //   URL: "shaosuki/shaosuki_bank_2.mp4",
  //   featured: true
  // },
  // {
  //   type: "银行",
  //   keyWords: ["财富传承"],
  //   question: "什么是财富传承",
  //   answer: "",
  //   URL: "shaosuki/shaosuki_bank_3.mp4",
  //   featured: true
  // },
  // {
  //   type: "银行",
  //   keyWords: ["金管家","经管家"],
  //   question: "什么是金管家",
  //   answer: "",
  //   URL: "shaosuki/shaosuki_bank_4.mp4",
  //   featured: true
  // },
  // {
  //   type: "银行",
  //   keyWords: ["私人银行客户贷"],
  //   question: "什么是私人银行客户贷",
  //   answer: "",
  //   URL: "shaosuki/shaosuki_bank_5.mp4",
  //   featured: true
  // },
  // {
  //   type: "券商",
  //   keyWords: ["开户","失败"],
  //   question: "开户失败怎么办",
  //   answer:"",
  //   URL: "shaosuki/shaosuki_trader_1.mp4",
  //   featured: true
  // },
  // {
  //   type: "券商",
  //   keyWords: ["佣金","手续费"],
  //   question: "佣金是多少",
  //   answer: "",
  //   URL: "shaosuki/shaosuki_trader_2.mp4",
  //   featured: true
  // },
  // {
  //   type: "券商",
  //   keyWords: ["场外基金",],
  //   question: "场外基金是什么",
  //   answer: "",
  //   URL: "shaosuki/shaosuki_trader_3.mp4",
  //   featured: true
  // },
  // {
  //   type: "券商",
  //   keyWords: ["场内基金",],
  //   question: "场内基金是什么",
  //   answer: "",
  //   URL: "shaosuki/shaosuki_trader_4.mp4",
  //   featured: true
  // },
  // {
  //   type: "券商",
  //   keyWords: ["股票交易时间"],
  //   question: "股票交易时间",
  //   answer:"",
  //   URL: "shaosuki/shaosuki_trader_5.mp4",
  //   featured: true
  // }
]

export const noop = questionArr[0]
export const whoami = questionArr[1]
