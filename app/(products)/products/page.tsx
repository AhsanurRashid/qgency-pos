import ProductSearh from '@/app/components/Products/ProductSearch'
import ProductPageStyle from './ProductPageStyle.module.css'
import ProductCard from '@/app/components/Products/ProductCard'
import OrderSummery from '@/app/components/Order/OrderSummery'

const Paducts = () => {
  return (
    <section className={ProductPageStyle.product_page_container}>
      <div className={ProductPageStyle.product_page_warpper}>
        <div className={ProductPageStyle.product_page_left}>
          <div className={ProductPageStyle.product_search_wrapper}>
            <ProductSearh />
          </div>
          <div className={ProductPageStyle.product_list}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className={ProductPageStyle.product_page_right}>
          <OrderSummery />
        </div>
      </div>
    </section>
  )
}

export default Paducts