"use client"
import { Search } from "lucide-react"
import ProductSearchStyle from './ProductSearchStyle.module.css'
import { cn } from "@/utils/cn"
import { useEffect, useState } from "react"
import { useFocusShortcut } from "@/hooks/useFocusShortcut"
import Image from "next/image"

const ProductSearh = () => {
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useFocusShortcut<HTMLInputElement>("/")

    useEffect(() => {
        setIsFocused(true)
    }, [])

    return (
        <form className={cn(ProductSearchStyle.product_search_form, { [ProductSearchStyle.focused]: isFocused })}>
            <Search className={ProductSearchStyle.product_search_icon}/>
            <input
                ref={inputRef}
                className={ProductSearchStyle.product_search_input} 
                type="text" 
                placeholder="Search products..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)} 
            />
            <Image src="/assets/images/barcode-scan.png" width={26} height={26} alt="barcode" />
        </form> 
    )
}

export default ProductSearh