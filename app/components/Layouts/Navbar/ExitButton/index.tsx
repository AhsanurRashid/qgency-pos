import { LogOut } from 'lucide-react'
import ExitButtonStyle from './ExitButtonStyle.module.css'
import Link from 'next/link'

const ExitButton = () => {
  return (
    <Link href='/' className={ExitButtonStyle.exit_button_warpper}>
        <div className={ExitButtonStyle.exit_button_icon_warpper}>
          <LogOut className={ExitButtonStyle.exit_button_icon}/> 
        </div>
        <p className={ExitButtonStyle.exit_button_text}>Exit POS</p>
    </Link>
  )
}

export default ExitButton