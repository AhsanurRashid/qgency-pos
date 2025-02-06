"use client"
import { cn } from '@/utils/cn'
import Cuppon from '../Cuppon'
import OrderProductCard from '../OrderProductCard'
import PaymentMethods from '../PaymentMethods'
import OrderSummeryStyle from './OrderSummeryStyle.module.css'
import { useShopStore } from '@/app/(products)/products/_store'
import { OrderProductType } from '@/utils/types'
const OrderSummery = () => {
    const {shopProducts, deleteAll} = useShopStore((state) => state)
  return (
    <div className={OrderSummeryStyle.order_summery_warpper}>
        <div className={OrderSummeryStyle.order_summery_title}>
            <h1 className={OrderSummeryStyle.order_summery_title_text}>Order Summary</h1>
            <p onClick={deleteAll} className={OrderSummeryStyle.order_summery_clear}>Clear All</p>
        </div>
        <div className={OrderSummeryStyle.order_product_list}>
            {
                shopProducts.length > 0 ? (
                    <>
                        {
                            shopProducts.map((orderProduct: OrderProductType) => (
                                <OrderProductCard key={`order_product_${orderProduct._id}`} orderProduct={orderProduct} />
                            ))
                        }
                    </>
                ): (
                    <h1 className='text-red-500 font-light text-xs py-10 text-center'>No product added!</h1>
                )
            }
        </div>
        <Cuppon />
        <div className={OrderSummeryStyle.order_calculation}>
            <div className={OrderSummeryStyle.order_calculation_wrapper}>
                <div className={OrderSummeryStyle.order_calculation_title}>Subtotal</div>
                <div className={OrderSummeryStyle.order_calculation_result}>$1,695.99</div>
            </div>
            <div className={OrderSummeryStyle.order_calculation_wrapper}>
                <div className={OrderSummeryStyle.order_calculation_title}>Discount</div>
                <div className={OrderSummeryStyle.order_calculation_result}>-$5.00</div>
            </div>
            <div className={OrderSummeryStyle.order_calculation_wrapper}>
                <div className={OrderSummeryStyle.order_calculation_title}>Taxes</div>
                <div className={OrderSummeryStyle.order_calculation_result}>$323.00</div>
            </div>
        </div>
        <PaymentMethods />
        <div className={OrderSummeryStyle.total_wrapper}>
            <div className={OrderSummeryStyle.total_text_and_amount}>
                <div className={OrderSummeryStyle.total_text}>Total Payment</div>
                <div className={OrderSummeryStyle.total_amount}>$4,400.00</div>
            </div>
            <p className={OrderSummeryStyle.total_sub_text}>Total (4 Items)</p>
        </div>
        <div className={OrderSummeryStyle.submit_btn_wrapper}>
            <button className={cn(OrderSummeryStyle.submit_btn, "opacity-20")}>
                Place Order
            </button>
        </div>
    </div>
  )
}

export default OrderSummery