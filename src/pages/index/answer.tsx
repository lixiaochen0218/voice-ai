import imgLoading from "~/assets/mingmang_loading_ico@2x.png"
import { Image, View } from "@tarojs/components"

export const Answer: FC<{
  loading: boolean
  show: boolean
  message: string
  answer: string
}> = props => {
  if (!props.show) return null
  if (props.loading)
    return (
      <View className='text-box loading'>
        <Image className='img-loading' src={imgLoading} />
      </View>
    )
  if (!props.answer && !props.message) return null
  return (
    <View className='text-box'>
      <View>{props.message}</View>
      {/* <View className="mt-4"> {props.answer} </View> */}
    </View>
  )
}
