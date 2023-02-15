export const videoBaseUrl =
  "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

const mingmangBaseUrl = 
"https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

export const defaultUrl = `${mingmangBaseUrl}/chunni_maternal/chunni_maternal_idle.mp4`


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
    URL: `${mingmangBaseUrl}/chunni_maternal/chunni_maternal_noop.mp4`,
    featured: false
  },
  {
    type: "introduction",
    keyWords: ["您好","你好","是谁","名字","自我介绍"],
    question: "你是谁？你的名字是什么？",
    answer: "您好，我是人工智能数字人小妮",
    URL: "chunni_maternal/chunni_maternal_opening.mp4",
    featured: false
  },
  {
    type: "maternal",
    keyWords: ["四维什么时候"],
    question: "四维什么时候做",
    answer:"四维检查在孕20-24周时做，胎儿的肢体和主要器官都发育成熟，胎儿大小和孕妇自身的羊水量比较适合进行四维彩超，得到的图片也比较清晰。",
    URL: "chunni_maternal/chunni_maternal_1.mp4",
    featured: true
  },
  {
    type: "maternal",
    keyWords: ["婴幼儿奶粉"],
    question: "婴幼儿奶粉分几段",
    answer:"根据孩子的年龄将婴幼儿的奶粉划分为四个阶段，第一阶段就是0到6个月的孩子，第二阶段就是6到12个月的孩子，三阶段就是1到3岁的孩子，四阶段就是3到6岁的孩子。",
    URL: "chunni_maternal/chunni_maternal_2.mp4",
    featured: true
  },
  {
    type: "maternal",
    keyWords: ["吃辅食"],
    question: "孩子多大吃辅食",
    answer:"一般孩子在6个月这一阶段就可以开始适当吃辅食，但具体还要结合孩子的消化功能来决定。",
    URL: "chunni_maternal/chunni_maternal_3.mp4",
    featured: true
  },
  {
    type: "maternal",
    keyWords: ["会走路"],
    question: "孩子几岁会走路",
    answer:"通常情况下，孩子大概处于1岁到1岁半之间会走路。",
    URL: "chunni_maternal/chunni_maternal_4.mp4",
    featured: true
  },
  {
    type: "maternal",
    keyWords: ["一岁宝宝一天睡眠多少小时"],
    question: "一岁宝宝一天睡眠多少小时",
    answer:"一岁宝宝一天睡眠10-13小时左右，如果宝宝睡眠时间稍长或者稍短，但没有其他的异常表现，精神状态比较好，也不必过于担心。",
    URL: "chunni_maternal/chunni_maternal_5.mp4",
    featured: true
  }
]

export const noop = questionArr[0]
export const whoami = questionArr[1]
