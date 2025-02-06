import Image from 'next/image'
import OrderProductCardStyle from './OrderProductCardStyle.module.css'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { OrderProductType } from '@/utils/types'
import { useShopStore } from '@/app/(products)/products/_store'

const OrderProductCard = ({orderProduct}: {orderProduct: OrderProductType}) => {
    const { setProductIncrement, setProductDecrement, deleteShopProducts} = useShopStore((state) => state)

  return (
    <div className={OrderProductCardStyle.order_product_card_wrapper}>
        <Image
            src={orderProduct.image}
            width={1000}
            height={1000}
            alt='order_product_img'
            className={OrderProductCardStyle.order_product_img}
        />
        <div className={OrderProductCardStyle.order_product_content}>
            <div className={OrderProductCardStyle.order_product_name_and_delete}>
                <h3 className={OrderProductCardStyle.order_product_content_name}>{orderProduct.name}</h3>
                <button onClick={() => deleteShopProducts(orderProduct._id)}>
                    <Trash2 className={OrderProductCardStyle.order_product_content_delte_btn}/>
                </button>
            </div>
            <div className={OrderProductCardStyle.order_product_content_price_add_btn}>
                <h3 className={OrderProductCardStyle.order_product_content_price}>${orderProduct.price}</h3>
                <div className={OrderProductCardStyle.order_product_content_add_btn}>
                    <button onClick={() => setProductDecrement(orderProduct._id)} className={OrderProductCardStyle.order_product_content_minus_btn}>
                        <Minus className={OrderProductCardStyle.order_product_content_btn_icon} />
                    </button>
                    <div className={OrderProductCardStyle.order_product_content_units}>
                        {orderProduct.amount}
                    </div>
                    <button onClick={() => setProductIncrement(orderProduct._id)} className={OrderProductCardStyle.order_product_content_plus_btn}>
                        <Plus className={OrderProductCardStyle.order_product_content_btn_icon}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderProductCard