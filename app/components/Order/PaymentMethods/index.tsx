import Image from 'next/image'
import { PaymentMethodsType } from '@/utils/types'
import PaymentMethodsStyle from './PaymentMethods.module.css'
import { Banknote } from 'lucide-react'

const PaymentMethods = () => {
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
  return (
    <div>
        <h1>Select payment</h1>
        <div className={PaymentMethodsStyle.payment_method_wrapper}>
            <div className={PaymentMethodsStyle.payment_method_card}>
                <Image 
                    src="/assets/images/checkout_one.png"
                    width={1000}
                    height={1000}
                    className={PaymentMethodsStyle.payment_method_img}
                    alt='test'
                />
                <Banknote className={PaymentMethodsStyle.payment_method_icon}/>
                <p className={PaymentMethodsStyle.payment_method_name}>Pay Later</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentMethods