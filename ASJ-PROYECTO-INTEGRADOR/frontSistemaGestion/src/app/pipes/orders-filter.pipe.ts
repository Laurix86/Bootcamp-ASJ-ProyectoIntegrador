import { Pipe, PipeTransform } from '@angular/core';
import { PurchasesOrderModel } from '../models/ordersModel';

@Pipe({
  name: 'ordersFilter'
})
export class OrdersFilterPipe implements PipeTransform {

  transform(orders: PurchasesOrderModel[], status: string): PurchasesOrderModel[] {
    if (!orders || !status) {
      return orders;
    }

    const currentDate = new Date();
    if (status === 'pendientes') {
      return orders.filter(order => order.is_pending && order.purchases_order_delivery_date > currentDate);
    } else if (status === 'finalizadas') {
      return orders.filter(order => !order.is_pending || order.purchases_order_delivery_date <= currentDate);
    } else if (status === 'activas') {
      return orders.filter(order => order.is_active);
    } else if (status === 'inactivas') {
      return orders.filter(order => !order.is_active);
    } else {
      return orders;
    }
  }


}
