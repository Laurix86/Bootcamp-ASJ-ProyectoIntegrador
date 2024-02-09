export interface PurchasesOrderModel{
    purchases_order_id:number,
    purchases_order_code: string,
    purchases_order_date: Date,
    purchases_order_delivery_date: Date,
    purchases_order_information: string,
    purchases_order_final_price: number,
    is_pending: boolean,
    is_active: boolean,
    providers_id:{
        providers_id: number,
        providers_denomination: string
    }
    
}

export interface OrdersDetailModel{
    orders_detail_id?: number,
    orders_detail_product_price: number,
    orders_detail_quantity: number,
    products_id:{
        products_id:number,
        products_denomination: string
    },
    purchases_order_id:{
        purchases_order_id: number,
    }

}