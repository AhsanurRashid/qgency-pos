import ProductSearh from '@/app/components/Products/ProductSearch'
import ProductPageStyle from './ProductPageStyle.module.css'
import OrderSummery from '@/app/components/Order/OrderSummery'
import ProductLsit from '@/app/components/Products/ProductList'

const Paducts = () => {
  return (
    <section className={ProductPageStyle.product_page_container}>
      <div className={ProductPageStyle.product_page_warpper}>
        <div className={ProductPageStyle.product_page_left}>
          <div className={ProductPageStyle.product_search_wrapper}>
            <ProductSearh />
          </div>
          <ProductLsit />
        </div>
        <div className={ProductPageStyle.product_page_right}>
          <OrderSummery />
        </div>
      </div>
    </section>
  )
}

export default Paducts