"use client"
import { Maximize, Minimize } from "lucide-react"
import FullScreenButtonStyle from './FullScreenButtonStyle.module.css'
import { useState } from "react";

const FullScreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true))
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false))
    }
  }

  
  
  return (
    <button onClick={toggleFullScreen} className={FullScreenButtonStyle.full_screen_button_container}>
        {
          isFullscreen ? <Minimize className={FullScreenButtonStyle.full_screen_button_icon}/> : <Maximize className={FullScreenButtonStyle.full_screen_button_icon}/>
        }
        <p className={FullScreenButtonStyle.full_screen_button_text}>
          {isFullscreen ? "Exit Full Screen" : "Full Screen"}
        </p>
    </button>
  )
}

export default FullScreenButton