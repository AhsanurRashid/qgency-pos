import { create } from "zustand"

interface InvoiceStoreType {
    showInvoice: boolean 
}
  
interface InvoiceStoreTypeActions {
    setShowInvoice: () => void
    setCloseInvoice: () => void
}

export const useInvoiceStore = create<InvoiceStoreType & InvoiceStoreTypeActions>((set) => ({
    showInvoice: false,

    setShowInvoice: () => set(() => {
        return { showInvoice: true }
    }),

    setCloseInvoice: () => set(() => {
        return { showInvoice: false }
    })
}))