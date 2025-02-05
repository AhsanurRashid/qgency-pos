import Link from "next/link"
import HomeButtonStyle from './HomeButtonStyle.module.css'

const HomeButton = () => {
  return (
    <div className={HomeButtonStyle.home_button_container}>
        <div className={HomeButtonStyle.home_button_warpper}>
            <Link href="/products" className={HomeButtonStyle.home_button_body}>
                <h3 className={HomeButtonStyle.home_button_text}>Enter POS System</h3>
            </Link>
        </div>
    </div>
  )
}

export default HomeButton