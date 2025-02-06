"use client"
import Image from 'next/image'
import { PaymentMethodsType } from '@/utils/types'
import PaymentMethodsStyle from './PaymentMethods.module.css'
import { Banknote, CreditCard, HandCoins } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import { usePaymentMethodStore } from './_store'

const PaymentMethods = () => {
    const {setPaymentMethodId} = usePaymentMethodStore((state) => state)

    const [selectedPaymentId, setSelectedPaymentId] = useState<number | null>(null)

    const payments: PaymentMethodsType[] = [
        {
            id: 1,
            name: 'Cash',
        },
        {
            id: 2,
            name: 'Pay Later',
        },
        {
            id: 3,
            name: 'Card',
        },
    ]

    const handleClickPayment = (id: number) => {
        setSelectedPaymentId(id)
        setPaymentMethodId(id)
    }
  return (
    <div className={PaymentMethodsStyle.payment_method}>
        <h1 className={PaymentMethodsStyle.payment_method_title}>Select payment</h1>
        <div className={PaymentMethodsStyle.payment_method_container}>
            {
                payments.map((payment: PaymentMethodsType, index: number) => (
                    <button onClick={() => handleClickPayment(payment.id)} key={`payment_${index}`} className={PaymentMethodsStyle.payment_method_wrapper}>
                        <div className={cn(PaymentMethodsStyle.payment_method_card, selectedPaymentId === payment.id ? "border-[#4D85F3] text-[#4D85F3] bg-[#F2F7FF]" : "border-[#E9EAEB] text-[#717680] bg-white")}>
                            <Image 
                                src={`/assets/images/${selectedPaymentId === payment.id ? 'checkout_two' : 'checkout_one'}.png`}
                                width={1000}
                                height={1000}
                                className={PaymentMethodsStyle.payment_method_img}
                                alt='test'
                            />
                            {
                                payment.name === 'Cash' ? <Banknote className={PaymentMethodsStyle.payment_method_icon}/>
                                : payment.name === 'Pay Later' ? <HandCoins className={PaymentMethodsStyle.payment_method_icon}/>
                                :  <CreditCard className={PaymentMethodsStyle.payment_method_icon}/>
                            }
                            <p className={PaymentMethodsStyle.payment_method_name}>Pay Later</p>
                        </div>
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default PaymentMethods