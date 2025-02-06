import Cuppon from '../Cuppon'
import OrderProductCard from '../OrderProductCard'
import PaymentMethods from '../PaymentMethods'
import OrderSummeryStyle from './OrderSummeryStyle.module.css'
const OrderSummery = () => {
  return (
    <div className={OrderSummeryStyle.order_summery_warpper}>
        <div className={OrderSummeryStyle.order_summery_title}>
            <h1 className={OrderSummeryStyle.order_summery_title_text}>Order Summary</h1>
            <p className={OrderSummeryStyle.order_summery_clear}>Clear All</p>
        </div>
        <div className={OrderSummeryStyle.order_product_list}>
            <OrderProductCard />
            <OrderProductCard />
            <OrderProductCard />
            <OrderProductCard />
            <OrderProductCard />
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
    </div>
  )
}

export default OrderSummery