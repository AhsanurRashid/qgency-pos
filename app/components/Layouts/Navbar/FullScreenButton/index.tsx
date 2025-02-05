import { Minimize } from "lucide-react"
import FullScreenButtonStyle from './FullScreenButtonStyle.module.css'

const FullScreenButton = () => {
  return (
    <button className={FullScreenButtonStyle.full_screen_button_container}>
        <Minimize className={FullScreenButtonStyle.full_screen_button_icon}/>
        <p className={FullScreenButtonStyle.full_screen_button_text}>Full Screen</p>
    </button>
  )
}

export default FullScreenButton