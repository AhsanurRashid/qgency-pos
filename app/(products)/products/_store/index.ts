import { OrderProductType } from "@/utils/types"
import { create } from "zustand"

interface ShopStoreType {
    shopProducts: OrderProductType[]
    allTotal: number
}
  
interface ShopStoreActions {
    setShopProducts: (product: OrderProductType) => void
    deleteShopProducts: (id: string) => void
    setProductIncrement: (id: string) => void
    setProductDecrement: (id: string) => void
    deleteAll: () => void
}
  

export const useShopStore = create<ShopStoreType & ShopStoreActions>((set) => ({
    shopProducts: [],
    allTotal: 0,

    setShopProducts: (product) => set((state) => {
        const prodctExist: OrderProductType | undefined = state.shopProducts.find(item => item._id === product._id)
        let newShopProducts: OrderProductType[] = []
        if(!prodctExist){
            newShopProducts = [...state.shopProducts, product]
        }else {
            newShopProducts = state.shopProducts.map((item) => 
                item._id === product._id
                    ? {
                        ...item, 
                        amount: item.amount + 1, 
                        price: Number(((item.amount + 1) * item.price).toFixed(2)) 
                    } 
                    : item
                )
        }
        const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.price, 0).toFixed(2))
        return { shopProducts: newShopProducts, allTotal: newAllTotal }
    }),

    deleteShopProducts: (id) => set((state) => {
        const newShopProducts = state.shopProducts.filter(item => item._id !== id)
        const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.price, 0).toFixed(2))
        return { shopProducts: newShopProducts, allTotal: newAllTotal }
    }),
    
    setProductIncrement: (id) => set((state) => {
        const newShopProducts = state.shopProducts.map((item) => 
          item._id === id 
            ? {
                ...item, 
                amount: item.amount + 1, 
                price: Number(
                  ((item.amount + 1) * (item.price - (item.price * (item.amount || 0) / 100))).toFixed(2)
                ) 
              } 
            : item
        )
        const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.price, 0).toFixed(2))
        return { shopProducts: newShopProducts, allTotal: newAllTotal }
      }),
    

      setProductDecrement: (id) => set((state) => {
        const newShopProducts = state.shopProducts.map((item) => 
          item._id === id 
            ? {
                ...item, 
                amount: Math.max(1, item.amount - 1),
                price: Number(
                  (Math.max(1, item.amount - 1) * (item.price - (item.price * (item.amount || 0) / 100))).toFixed(2)
                ) 
              } 
            : item
        )
        const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.price, 0).toFixed(2))
        return { shopProducts: newShopProducts, allTotal: newAllTotal }
      }),

      deleteAll: () => set(() => {
        return { shopProducts: [] }
      })
}))