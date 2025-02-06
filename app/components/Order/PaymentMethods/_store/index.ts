import { create } from "zustand"

interface PaymentMethodStoreType {
    paymentMathodIdFormStore: number | null 
}
  
interface PaymentMethodStoreTypeActions {
    setPaymentMethodId: (id: number) => void
}

export const usePaymentMethodStore = create<PaymentMethodStoreType & PaymentMethodStoreTypeActions>((set) => ({
    paymentMathodIdFormStore: null,

    setPaymentMethodId: (id) => set(() => {
        return { paymentMathodIdFormStore: id }
    }),
}))