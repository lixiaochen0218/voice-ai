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
    keyWords: ["您好","你好","是谁","名字","自我"],
    question: "你是谁？你的名字是什么？",
    answer: "您好，我是人工智能数字人小妮",
    URL: "chunni_maternal/chunni_maternal_opening.mp4",
    featured: false
  },
  {
    type: "chatGPT",
    keyWords: ["chatgpt","虚拟人技术融合"],
    question: "chatgpt如何和虚拟人技术融合？",
    answer:"ChatGPT可以与虚拟人技术融合，以提供更加真实的人机交互体验。ChatGPT可以使用虚拟人技术来让聊天机器人更加真实，让它们更加像真实的人类一样，拥有更多的自然语言处理能力，以及更多的情感表达能力。此外，ChatGPT还可以使用虚拟人技术来增加聊天机器人的认知能力，使它们能够更好地理解用户的意图，并回应相应的问题。",
    URL: "chunni_maternal/chunni_chatgpt_1.mp4",
    featured: true
  },
  {
    type: "chatGPT",
    keyWords: ["chatgpt", "传统搜索引擎","区别"],
    question: "chatgpt和传统搜索引擎最大的区别是什么？",
    answer:"拆[chai5]特[te5]冀辟替是一种基于自然语言处理的对话式搜索引擎，它可以根据用户的输入自动生成搜索结果。传统搜索引擎是基于关键字的搜索引擎，它只能根据用户输入的关键字来搜索结果。拆[chai5]特[te5]冀辟替的优势在于它可以根据用户的输入自动生成搜索结果，而传统搜索引擎只能根据用户输入的关键字来搜索结果，而且它不能处理复杂的自然语言查询。",
    URL: "chunni_maternal/chunni_chatgpt_2.mp4",
    featured: true
  },
  {
    type: "chatGPT",
    keyWords: ["三体", "你们是虫子"],
    question: "三体中，你们是虫子是什么意思？",
    answer:"“三体”是中国著名科幻小说家刘慈欣的系列作品，其中描写了一个虫族文明的故事。虫族是一个外星文明，它们拥有一个三体系统，由三个星球组成，它们之间由引力相互连接。虫族的成员们被称为“虫子”，他们拥有超凡的智慧，可以控制宇宙中的能量，并在宇宙中进行长途旅行。",
    URL: "chunni_maternal/chunni_chatgpt_3.mp4",
    featured: true
  },
  {
    type: "chatGPT",
    keyWords: ["鉴定真爱", "爱情", "感情"],
    question: "怎么鉴定真爱？",
    answer:"看对方是否会主动给你提供帮助：真爱的人会主动给你提供帮助，不管是在生活中还是在工作中，他们都会尽力去帮助你，而不是让你负担更多的压力。看对方是否会主动给你安慰：真爱的人会主动给你安慰，当你遇到困难的时候，他们会给你温暖的安慰，让你感受到他们的关心。",
    URL: "chunni_maternal/chunni_chatgpt_4.mp4",
    featured: true
  },
  {
    type: "chatGPT",
    keyWords: ["秦始皇", "六国统一", "被刺杀"],
    question: "秦始皇六国统一前被刺杀会发生什么？",
    answer:"如果秦始皇在六国统一前被刺杀，那么中国将会出现一种新的政治格局，六国将会继续分裂，并且可能会出现新的政权。由于秦始皇的统一政策，中国的统一将会受到严重的影响，可能会出现一种新的政治格局，比如分封制、宗法制等。此外，由于秦始皇的统一政策，中国的经济发展也将会受到影响，可能会出现一种新的经济格局，比如农业经济、商业经济等。",
    URL: "chunni_maternal/chunni_chatgpt_5.mp4",
    featured: true
  },
  {
    type: "introduction",
    keyWords: ["介绍一下","DeepBrain","AI","明芒科技公司"],
    question: "请介绍一下DeepBrain AI明芒科技公司",
    answer: "明芒科技公司是一家专注于人工智能技术研发的高科技公司，致力于将人工智能技术应用于智能家居、智能安防、智能健康、智能机器人等领域，致力于为客户提供智能化解决方案。公司拥有一支充满活力的研发团队，拥有丰富的人工智能技术研发经验，拥有多项国家发明专利，并与多家国内外知名企业建立了长期的合作关系。",
    URL: "chunni_maternal/chunni_chatgpt_6.mp4",
    featured: true
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
