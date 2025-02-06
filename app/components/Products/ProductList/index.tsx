"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'
import ProductListStyle from './ProductListStyle.module.css'
import { getProducts } from '@/actions/getProducts'
import { ProductType } from '@/utils/types'

const ProductList = () => { 
    const [products, setProducts] = useState<ProductType[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        const loadProducts = async () => {
            if (!hasMore || loading) return
            setLoading(true)
            try {
                const data = await getProducts(page)
                setProducts((prev) => [...prev, ...data])
                setHasMore(data.length > 0)
            } catch (error) {
                console.error("Error fetching products:", error)
            } finally {
                setLoading(false)
            }
        }

        loadProducts()
    }, [page])

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100 &&
                hasMore
            ) {
                setPage((prev) => prev + 1)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [hasMore])

    return (
        <div className={ProductListStyle.product_list}>
            {
                products.map(product => (
                    <ProductCard key={`product_${product._id}`} product={product} loading={loading}/>
                ))
            }
        </div>
    )
}

export default ProductList
