import Image from 'next/image'
import OrderProductCardStyle from './OrderProductCardStyle.module.css'
import { Minus, Plus, Trash2 } from 'lucide-react'
const OrderProductCard = () => {
  return (
    <div className={OrderProductCardStyle.order_product_card_wrapper}>
        <Image
            src="https://picsum.photos/200"
            width={1000}
            height={1000}
            alt='order_product_img'
            className={OrderProductCardStyle.order_product_img}
        />
        <div className={OrderProductCardStyle.order_product_content}>
            <div className={OrderProductCardStyle.order_product_name_and_delete}>
                <h3 className={OrderProductCardStyle.order_product_content_name}>Dove Shampoo Healthy</h3>
                <button>
                    <Trash2 className={OrderProductCardStyle.order_product_content_delte_btn}/>
                </button>
            </div>
            <div className={OrderProductCardStyle.order_product_content_price_add_btn}>
                <h3 className={OrderProductCardStyle.order_product_content_price}>$47888.00</h3>
                <div className={OrderProductCardStyle.order_product_content_add_btn}>
                    <button className={OrderProductCardStyle.order_product_content_minus_btn}>
                        <Minus className={OrderProductCardStyle.order_product_content_btn_icon} />
                    </button>
                    <div className={OrderProductCardStyle.order_product_content_units}>
                        6
                    </div>
                    <button className={OrderProductCardStyle.order_product_content_plus_btn}>
                        <Plus className={OrderProductCardStyle.order_product_content_btn_icon}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderProductCard