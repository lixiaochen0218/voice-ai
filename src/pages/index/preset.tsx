import { Image, View } from "@tarojs/components"
import imgPreset from "~/assets/mingmang_tips_ico@2x.png"
import { questionArr } from "~/config/dict"
import { useAniDelay } from "~/module/animate"


export const Preset: FC<{
  show: boolean
  onSelect: (question: string) => void
}> = props => {
  const { show, aniShow } = useAniDelay(props.show)

  if (!show) return null

  return (
    <View
      className={["preset", "animate", aniShow ? "" : "fade-up"].join(" ")}
    >
      <View className='preset-title'>
        <Image src={imgPreset} className='preset-icon' />
        <View className='preset-title-text'>您可以尝试这样提问：</View>
      </View>
      <View className='preset-content'>
        {questionArr.filter(item => item.featured).map(item => (
          <View
            key={item.question}
            className='preset-item'
            onClick={() => aniShow && props.onSelect(item.question)}
          >
            {item.question}
          </View>
        ))}
      </View>
    </View>
  )
}
