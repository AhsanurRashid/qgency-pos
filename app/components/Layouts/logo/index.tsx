import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
        <Image
            src="/assets/images/logo.png"
            width={1000}
            height={1000}
            className="h-[29.03px] w-[117px]"
            alt="logo"
        />
    </Link>
  )
}

export default Logo
