import imgPreset from "~/assets/mingmang_tips_ico@2x.png"
import { questionArr } from "~/config/dict"
import { useAniDelay } from "~/module/animate"
// import { isFinclipAndroid } from "~/module/system"
import { MixImage, MixView } from "./MixView"


export const Preset: FC<{
  show: boolean
  onSelect: (question: string) => void
}> = props => {
  const { show, aniShow } = useAniDelay(props.show)

  if (!show) return null

  return (
    <MixView
      className={["preset", "animate", aniShow ? "" : "fade-up"].join(" ")}
    >
      <MixView className='preset-title'>
        <MixImage src={imgPreset} className='preset-icon' />
        <MixView className='preset-title-text'>您可以尝试这样提问：</MixView>
      </MixView>
      <MixView className='preset-content'>
        {questionArr.filter(item => item.featured).map(item => (
          <MixView
            key={item.question}
            className='preset-item'
            onClick={() => aniShow && props.onSelect(item.question)}
          >
            {item.question}
          </MixView>
        ))}
      </MixView>
    </MixView>
  )
}
