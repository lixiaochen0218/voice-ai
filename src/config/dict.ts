export const videoBaseUrl =
  "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

const mingmangBaseUrl = "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

export const defaultUrl = `${mingmangBaseUrl}/caoqing/caoqing_idle.mp4`


export type questionItem = {
  type: string
  keyWords:string[]
  question: string
  URL: string
  answer: string
  appId?: string
  changeType?: string
}

export const questionArr: questionItem[] = [
  {
    type: "noop",
    keyWords: [],
    question: "",
    answer: "您好，我才刚出生一个月，很多技能还在学习中，换个问题试试吧。",
    URL: `${mingmangBaseUrl}/caoqing/caoqing_noop.mp4`,
  },
  {
    type: "自我介绍",
    keyWords: ["您好","你好","是谁","名字","自我介绍"],
    question: "你是谁？你的名字是什么？",
    answer: "您好，我是您的专属理财顾问小信，很开心见到您",
    URL: "caoqing/caoqing_opening.mp4"
  },
  {
    type: "GENERAL",
    keyWords: ["你会做什么"],
    question: "你会做什么",
    answer:"您可以和我说出您的理财需求，我这边会根据您的需求为您推荐合适的理财产品哦[o5]，或者您有理财相关疑问也都可以咨询我，小信随时听候您的召唤哦[o5].",
    URL: "caoqing/caoqing_licai_1.mp4"
  },
  {
    type: "GENERAL",
    keyWords: ["推荐稳健理财产品"],
    question: "推荐稳健理财产品",
    answer:"小信为您找到3款稳健的理财产品，符合随存随取且没有时间限制的需求。您可以点击下面的任意一款让我为您介绍",
    URL: "caoqing/caoqing_licai_2.mp4",
    changeType: "CHOOSE"
  },
  {
    type: "CHOOSE",
    keyWords: ["薪金煲周周享"],
    question: "薪金煲周周享①",
    answer:"薪金煲[bao3]周周享[xiang3]，是(中信银行)提供的通知存款,委托通知的存款业务,签约此业务后，存款人委托(中信银行自动办理)通知存款的存入，并按照事先约定通知周期，支取时按事先约定的通知期计付利息.通知期满未支取时，本金按原约定通知期及购买规则自动办理通知存款存入的人民币存储存款方式.",
    URL: "caoqing/caoqing_xinjinbao_1.mp4",
    changeType: "XJB"
  },
  {
    type: "CHOOSE",
    keyWords: ["薪金煲周周享"],
    question: "薪金煲周周享②",
    answer:"薪金煲[bao3]周周享[xiang3]，是(中信银行)提供的通知存款,委托通知的存款业务,签约此业务后，存款人委托(中信银行自动办理)通知存款的存入，并按照事先约定通知周期，支取时按事先约定的通知期计付利息.通知期满未支取时，本金按原约定通知期及购买规则自动办理通知存款存入的人民币存储存款方式.",
    URL: "caoqing/caoqing_xinjinbao_1.mp4",
    changeType: "XJB"
  },
  {
    type: "CHOOSE",
    keyWords: ["薪金煲周周享"],
    question: "薪金煲周周享③",
    answer:"薪金煲[bao3]周周享[xiang3]，是(中信银行)提供的通知存款,委托通知的存款业务,签约此业务后，存款人委托(中信银行自动办理)通知存款的存入，并按照事先约定通知周期，支取时按事先约定的通知期计付利息.通知期满未支取时，本金按原约定通知期及购买规则自动办理通知存款存入的人民币存储存款方式.",
    URL: "caoqing/caoqing_xinjinbao_1.mp4",
    changeType: "XJB"
  },
  {
    type: "XJB",
    keyWords: ["起购金额是多少"],
    question: "起购金额是多少",
    answer:"薪金煲[bao3]周周享[xiang3]的单笔起购金额是不低于5万元。",
    URL: "caoqing/caoqing_xinjinbao_2.mp4",
  },
  {
    type: "XJB",
    keyWords: ["利率是多少"],
    question: "利率是多少",
    answer:"当前7日年化率是百分之二点一，实际利率以签约及持仓页面展示利率为准。",
    URL: "caoqing/caoqing_xinjinbao_3.mp4",
    
  },
  {
    type: "XJB",
    keyWords: ["如何购买"],
    question: "如何购买呢？",
    answer:"点击下方薪金煲[bao3]周周享[xiang3]的详情页内的立即购买就可以购买了哦[o5].",
    URL: "caoqing/caoqing_xinjinbao_4.mp4",
    
  },
  {
    type: "XJB",
    keyWords: ["立即购买"],
    question: "立即购买",
    answer:"",
    URL: "",
    appId: 'wx886b6a5d3603ae7d'
  },
  {
    type: "XJB",
    keyWords: ["好的，谢谢你"],
    question: "好的，谢谢你",
    answer:"您客气啦,能帮到您是我的荣幸,有什么理财需求可以随时召唤我,再见",
    URL:  "caoqing/caoqing_xinjinbao_5.mp4",
    changeType: "GENERAL"
  },
  {
    type: "BACK",
    keyWords: ["返回首页"],
    question: "返回首页",
    answer:"",
    URL:  "",
    changeType: "GENERAL"
  }
]

export const noop = questionArr[0]
export const whoami = questionArr[1]
