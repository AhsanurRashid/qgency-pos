import Logo from "../logo"
import ExitButton from "./ExitButton"
import FullScreenButton from "./FullScreenButton"
import NavbarStyle from './NavbarStyle.module.css'

interface NavabrProps {
  navabarFor?: string
}

const Navbar: React.FC<NavabrProps> = ({navabarFor = ""}) => {
  return (
    <nav className={NavbarStyle.navbar_container}>
      <Logo />
      { 
        navabarFor === 'products' ? 
          <div className={NavbarStyle.navbar_wrapper}>
            <ExitButton /> 
            <FullScreenButton />
          </div>
        : null 
      }
    </nav>
  )
}

export default Navbar