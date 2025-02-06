import { ChevronDown, Percent } from "lucide-react"
import CupponFormStyle from './CupponFromStyle.module.css'
const Cuppon = () => {
  return (
    <div className={CupponFormStyle.cuppon_from_warpper}>
    <form className={CupponFormStyle.cuppon_from}>
        <div className={CupponFormStyle.cuppon_icons}>
           <Percent className={CupponFormStyle.cuppon_icon}/> 
           <ChevronDown className={CupponFormStyle.cuppon_icon}/>
        </div>
        <input className={CupponFormStyle.cuppon_input} type="text" />
        <button className={CupponFormStyle.cuppon_btn} type="submit">Apply</button>
    </form>
    </div>
  )
}

export default Cuppon