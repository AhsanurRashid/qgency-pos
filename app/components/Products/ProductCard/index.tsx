import Image from 'next/image'
import ProductCardStyle from './ProductCardStyle.module.css'
import { Plus } from 'lucide-react'

const ProductCard = () => {
  return (
    <div className={ProductCardStyle.product_card_wrapper}>
        <Image 
            src="https://picsum.photos/200" 
            width={1000}
            height={1000}
            alt='card_image'
            className={ProductCardStyle.product_card_img}    
        />
        <div className={ProductCardStyle.product_content}>
            <h2 className={ProductCardStyle.product_card_name}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores ipsam aliquam dolore ut</h2>
            <h3 className={ProductCardStyle.product_card_price}>$9,943.00</h3>
            <div className={ProductCardStyle.product_card_stcok_and_add}>
                <p className={ProductCardStyle.product_card_stock}>12 in stock</p>
                <button className={ProductCardStyle.product_card_add}>
                    <Plus className={ProductCardStyle.product_card_add_icon}/> 
                    <span className={ProductCardStyle.product_card_add_text}>Add</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard