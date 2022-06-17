export const videoBaseUrl =
  "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

const mingmangBaseUrl = "https://mingmang-1310900042.cos.ap-beijing.myqcloud.com"

export const defaultUrl = `${mingmangBaseUrl}/chunni_red/chunni_idle.mp4`


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
    URL: `${mingmangBaseUrl}/chunni_red/chunni_noop.mp4`,
    featured: false
  },
  {
    type: "自我介绍",
    keyWords: ["您好","你好","是谁","名字","自我介绍"],
    question: "你是谁？你的名字是什么？",
    answer: "您好，我是接诉即办推广大使时间小妮",
    URL: "chunni_red/chunni_opening.mp4",
    featured: false
  },
  {
    type: "市民服务热线(12345)",
    keyWords: ["介绍","市民","服务","热线","一二三四五","12345"],
    question: "介绍市民服务热线(12345)",
    answer:"日前，12345上线最新版智能语音。市民可根据智能语音提示，准确咨询反映问题，获取相关政策解释或人工坐席服务。",
    URL: "chunni_red/chunni_12345_intro.mp4",
    featured: true
  },
  {
    type: "市民服务热线(12345)",
    keyWords: ["功能","市民","服务","热线","一二三四五","12345"],
    question: "市民服务热线(12345)有哪些功能",
    answer:
      "根据智能语音提示，按一可以咨询健康宝弹窗问题，按二咨询紧急就医救助问题，按三则是咨询反映其他事项。",
    URL: "chunni_red/chunni_12345_feature.mp4",
    featured: true
  },
  {
    type: "市民服务热线(12345)",
    keyWords: ["健康宝","弹窗","问题"],
    question: "健康宝弹窗问题",
    answer:
      "拨打12345市民服务热线，按一进入健康宝弹窗问题后，将为您接通健康宝智能语音机器人，市民可根据语音提示回答简单信息，获取最新准确的弹窗政策解释服务.",
    URL: "chunni_red/chunni_12345_press_one.mp4",
    featured: true
  },
  {
    type: "市民服务热线(12345)",
    keyWords: ["就医","救助","生病","12345"],
    question: "紧急就医救助问题",
    answer:
      "拨打12345市民服务热线，按二进入紧急就医救助问题.这条专线仅限紧急就医救助使用.主要受理封管控区内，需要第一时间就医、用药、救助、物资保障等紧急问题.此处将设置人工专席接听，第一时间受理交办.",
    URL: "chunni_red/chunni_12345_press_two.mp4",
    featured: true
  },
  {
    type: "市民服务热线(12345)",
    keyWords: ["其他","问题","投诉","热线","12345"],
    question: "反映其他问题",
    answer:
      "拨打12345市民服务热线，按三,咨询反映其他问题.目前疫情期间12345话务量较大，如果您想咨询疫情防控相关政策，可以优先通过北京12345微信服务号进行智能咨询，通过民意直通填写并提交诉求.",
    URL: "chunni_red/chunni_12345_press_three.mp4",
    featured: true
  },
  {
    type: "健康宝弹窗",
    keyWords: ["打开北京健康宝"],
    question: "打开北京健康宝",
    answer:"好的，正在为您打开北京健康宝",
    URL: "chunni_red/chunni_open_jiankangbao.mp4",
    featured: true,
    appId: "wxfe0e405895cafdf9"
  },
  {
    type: "健康宝弹窗",
    keyWords: ["健康宝","弹窗三"],
    question: "健康宝 弹窗③",
    answer:
      "弹窗三，对应与京内外的疫情风险地区、风险点位、风险人员等有时空关联，需要进行风险排查。若您在京，请立即向所居住的社区，村，酒店或单位报告，由相关部门进行风险排查，如无关联风险可解除弹窗，自行核酸检测不能自动解除本弹窗。",
    URL: "chunni_red/chunni_popup_3.mp4",
    featured: true
  },
  {
    type: "健康宝弹窗",
    keyWords: ["健康宝","弹窗四"],
    question: "健康宝 弹窗④",
    answer:
      "弹窗四，对应未按照防疫政策在规定时间内完成核酸检测人员。您有如下任一情况时，需要在规定时间内完成核酸检测。一，进返京72小时以内，二，近期有购买四类药品，三，出现发热等十一类症状到诊所等基层医疗机构就诊后，四，所从事职业有相关要求等其他防疫规定情况。",
    URL: "chunni_red/chunni_popup_4.mp4",
    featured: true
  },
  {
    type: "健康宝弹窗",
    keyWords: ["健康宝","弹窗衣一"],
    question: "健康宝 弹窗①",
    answer:
      "弹窗一，对应十四天内曾到访有一例(及以上)本土新冠病毒感染者所在县市、区、旗人员.根据北京市进（返）京防疫政策，请暂缓来京.待该地区连续十四天无新增本土感染者或转为低风险地区，或您离开上述地区已满十四天，可通过健康宝重新申请获取绿码进京.",
    URL: "chunni_red/chunni_popup_1.mp4",
    featured: true
  },
  {
    type: "健康宝弹窗",
    keyWords: ["健康宝","弹窗二"],
    question: "健康宝 弹窗②",
    answer:
      "弹窗二，对应目前正处于入境隔离期间人员.根据北京市入境防疫政策，请您按要求履行隔离防疫义务.本弹窗状态将在您入境隔离期满后次日将自动解除.",
    URL: "chunni_red/chunni_popup_2.mp4",
    featured: true
  },
  {
    type: "健康宝弹窗",
    keyWords: ["健康宝","弹窗舞五"],
    question: "健康宝 弹窗⑤",
    answer:
      "弹窗五，对应14日内有陆路边境口岸所在县旅居史人员。根据北京市防疫政策，非必须不进（返）京。如您离开上述地区满14天后，可通过健康宝重新申请获取“绿码”状态。",
    URL: "chunni_red/chunni_popup_5.mp4",
    featured: true
  },
  {
    type: "奥密克戎",
    keyWords: ["奥密克戎","变异株","新冠","病毒","预防"],
    question: "奥密克戎变异株",
    answer:
      "我国外防输入，内防反弹的防控策略对奥密克戎变异株仍然有效.中国疾控中心病毒所已针对奥密克戎变异株建立了特异性核酸检测方法，并持续针对可能的输入病例开展病毒基因组监测.上述措施将有利于及时发现可能输入我国的奥密克戎变异株.",
    URL: "chunni_red/chunni_omicron.mp4",
    featured: true
  }
]

export const noop = questionArr[0]
export const whoami = questionArr[1]
