"use client"
import Image from 'next/image'
import ProductCardStyle from './ProductCardStyle.module.css'
import { Plus } from 'lucide-react'
import { OrderProductType, ProductType } from '@/utils/types'
import { useShopStore } from '@/app/(products)/products/_store'

const ProductCard = ({product, loading}: {product: ProductType, loading: boolean}) => {
    const {setShopProducts} = useShopStore((state) => state)

    const handleAddProduct = (product: ProductType) => {
        const productForOrder: OrderProductType = {
            _id: product._id,
            name: product.name,
            price: product.price,
            stock: product.stock,
            image: product.image,
            amount: 1
        }
        setShopProducts(productForOrder)
    }

  return (
    <div className={ProductCardStyle.product_card_wrapper}>
        { loading ? (
            <div className={ProductCardStyle.skeleton_image}></div>
        ) : (
            <Image 
            src={product.image} 
            width={1000}
            height={1000}
            alt='card_image'
            className={ProductCardStyle.product_card_img}    
            />
        )}
        <div className={ProductCardStyle.product_content}>
            { loading ? (
                <>
                    <div className={ProductCardStyle.skeleton_name}></div>
                    <div className={ProductCardStyle.skeleton_price}></div>
                    <div className={ProductCardStyle.skeleton_stock}></div>
                </>
            ) : (
                <>
                    <h2 className={ProductCardStyle.product_card_name}>{product.name}</h2>
                    <h3 className={ProductCardStyle.product_card_price}>{product.price}</h3>
                    <div className={ProductCardStyle.product_card_stcok_and_add}>
                    <p className={ProductCardStyle.product_card_stock}>{product.stock} in stock</p>
                    <button onClick={() => handleAddProduct(product)} className={ProductCardStyle.product_card_add}>
                        <Plus className={ProductCardStyle.product_card_add_icon}/> 
                        <span className={ProductCardStyle.product_card_add_text}>Add</span>
                    </button>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default ProductCard