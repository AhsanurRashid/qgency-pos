import ProductPageStyle from './ProductPageStyle.module.css'

const Paducts = () => {
  return (
    <section className={ProductPageStyle.product_page_container}>
      <div className={ProductPageStyle.product_page_warpper}>
        <div className={ProductPageStyle.product_page_left}>left</div>
        <div className={ProductPageStyle.product_page_right}>right</div>
      </div>
    </section>
  )
}

export default Paducts