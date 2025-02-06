"use client"
import { Download, MapPinned, PhoneCall, Printer, X } from 'lucide-react'
import Logo from '../Layouts/logo'
import InvoiceStyle from './InvoiceStyle.module.css'
import { cn } from '@/utils/cn'
import { useShopStore } from '@/app/(products)/products/_store'
import { OrderProductType } from '@/utils/types'
import { useInvoiceStore } from './_store'

const Invice = () => {
    const {showInvoice, setCloseInvoice} = useInvoiceStore((state) => state)
    const {shopProducts, allTotal, grandTotal} = useShopStore((state) => state)

    if(!showInvoice) {
        return null
    }

  return (
    <div className={InvoiceStyle.invoice_container}>
        <div className={InvoiceStyle.invoice_wrapper}>
            <div className={InvoiceStyle.invoice_header}>
                <Logo />
                <div>
                    <div className='flex items-center justify-end mb-3'>
                        <X onClick={setCloseInvoice} className={InvoiceStyle.close_btn}/>
                    </div>
                    <div className={InvoiceStyle.invoice_btns}>
                        <button className={cn(InvoiceStyle.invoice_icon_text, "bg-[#17B26A]")}>
                            <p className={InvoiceStyle.invoice_text}>Print Invoice</p>
                            <Printer className={InvoiceStyle.invoice_icon}/>
                        </button>
                        <button className={cn(InvoiceStyle.invoice_icon_text, "bg-[#2166F0]")}>
                            <p className={InvoiceStyle.invoice_text}>Download</p>
                            <Download className={InvoiceStyle.invoice_icon}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="space-y-[6px]">
                <div className={InvoiceStyle.invoice_address}>
                    <div className={InvoiceStyle.invoice_address_icon_wrapper}>
                        <PhoneCall className={InvoiceStyle.invoice_address_icon} />
                    </div>
                    <p className={InvoiceStyle.invoice_address_text}>+880 1234567890</p>
                </div>
                <div className={InvoiceStyle.invoice_address}>
                    <div className={InvoiceStyle.invoice_address_icon_wrapper}>
                        <MapPinned className={InvoiceStyle.invoice_address_icon} />
                    </div>
                    <p className={InvoiceStyle.invoice_address_text}>House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216</p>
                </div>
                <div className={InvoiceStyle.invoice_items}>
                    <div className={InvoiceStyle.invoice_items_header}>
                        <div className={InvoiceStyle.invoice_item}>Item Description</div>
                        <div className={cn(InvoiceStyle.invoice_item, "text-center")}>Qty</div>
                        <div className={cn(InvoiceStyle.invoice_item, "text-right")}>Total</div>
                    </div>
                    {
                        shopProducts.map((product: OrderProductType) => (
                            <div key={product._id} className={InvoiceStyle.invoice_items_body}>
                                <div className={InvoiceStyle.invoice_item}>{product.name}</div>
                                <div className={cn(InvoiceStyle.invoice_item, "text-center")}>{product.amount}</div>
                                <div className={cn(InvoiceStyle.invoice_item, "text-right")}>{product.price}</div>
                            </div>
                        ))
                    }
                </div>
                <div className={InvoiceStyle.invoice_amount}>
                    <div className={InvoiceStyle.invoice_amount_wrapper}>
                        <div>Subtotal</div>
                        <div>${allTotal}</div>
                    </div>
                    <div className={InvoiceStyle.invoice_amount_wrapper}>
                        <div>Taxes (5%)</div>
                        <div>$323</div>
                    </div>
                    <div className={InvoiceStyle.invoice_amount_wrapper}>
                        <div>Discount (-)</div>
                        <div>-$5</div>
                    </div>
                </div>
                <div className={InvoiceStyle.invoice_amount_grand}>
                    <div className={InvoiceStyle.invoice_amount_wrapper}>
                        <div>Grand Total</div>
                        <div>${grandTotal}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invice