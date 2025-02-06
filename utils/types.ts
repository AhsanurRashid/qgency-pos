export interface PaymentMethodsType {
    id: number;
    name: string;
} 

export interface ProductType {
    _id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
}

export interface OrderProductType {
    _id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    amount: number;
}