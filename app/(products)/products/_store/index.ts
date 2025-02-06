import { OrderProductType } from "@/utils/types"
import { create } from "zustand"

interface ShopStoreType {
    shopProducts: OrderProductType[]
    allTotal: number
    grandTotal: number
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
    grandTotal: 0,

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
        const newGrandTotal = newAllTotal !== 0 ? (newAllTotal - 5) + 323 : 0
        return { shopProducts: newShopProducts, allTotal: newAllTotal, grandTotal: newGrandTotal }
    }),

    deleteShopProducts: (id) => set((state) => {
        const newShopProducts = state.shopProducts.filter(item => item._id !== id)
        const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.price, 0).toFixed(2))
        const newGrandTotal = newAllTotal !== 0 ? (newAllTotal - 5) + 323 : 0
        return { shopProducts: newShopProducts, allTotal: newAllTotal, grandTotal: newGrandTotal }
    }),
    
    setProductIncrement: (id) => set((state) => {
        const newShopProducts = state.shopProducts.map((item) => {
            if(item._id === id) {
              if(item.amount < item.stock) {
                return {
                  ...item, 
                  amount: item.amount + 1, 
                  price: (item.price / item.amount) * (item.amount + 1) 
                } 
              }
            }
            return item
        })
        
        const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.price, 0).toFixed(2))
        const newGrandTotal = newAllTotal !== 0 ? (newAllTotal - 5) + 323 : 0
        return { shopProducts: newShopProducts, allTotal: newAllTotal, grandTotal: newGrandTotal }
      }),
    

      setProductDecrement: (id) => set((state) => {
        const newShopProducts = state.shopProducts.map((item) => {
          if (item._id === id) {
              if (item.amount > 1) {
                  const unitPrice = item.price / item.amount 
                  return {
                      ...item,
                      amount: item.amount - 1, 
                      price: unitPrice * (item.amount - 1), 
                  }
              }
          }
          return item
        })
        const newAllTotal = Number(newShopProducts.reduce((sum, item) => sum + item.price, 0).toFixed(2))
        const newGrandTotal = newAllTotal !== 0 ? (newAllTotal - 5) + 323 : 0
        return { shopProducts: newShopProducts, allTotal: newAllTotal, grandTotal: newGrandTotal }
      }),

      deleteAll: () => set(() => {
        return { shopProducts: [], allTotal: 0, grandTotal: 0 }
      })
}))