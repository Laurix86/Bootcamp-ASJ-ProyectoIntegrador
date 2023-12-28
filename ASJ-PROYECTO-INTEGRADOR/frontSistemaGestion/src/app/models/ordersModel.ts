export interface OrdersModel{
    id:number,
    orderNumber: number,
    orderDate: string,
    deliveryDate: string,
    infoExtra: string,
    providerOrder: string,
    productsOrder: {},
    totalOrder: number,
    pendingOrder: boolean,
    activo: boolean
}