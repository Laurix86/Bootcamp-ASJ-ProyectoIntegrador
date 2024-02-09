package com.bootcamp.backsistemagestion.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.models.OrdersDetailModel;
import com.bootcamp.backsistemagestion.repositories.OrdersDetailRepository;
import com.bootcamp.backsistemagestion.repositories.ProductsRepository;
import com.bootcamp.backsistemagestion.repositories.PurchasesOrdersRepository;


@Service
public class OrderDetailService {

	@Autowired
	OrdersDetailRepository orderDetailRepository;
	
	@Autowired
	ProductsRepository productRepository;
	
	@Autowired
	PurchasesOrdersRepository purchasesOrderRepository;
	
	public List<OrdersDetailModel> getAllOrdersDetail(){
		return orderDetailRepository.findAll();
	}
	
	public List<OrdersDetailModel> getOrdersByPurchasesOrders(Integer id){
		return orderDetailRepository.getDetailsByPurchasesOrder(id);
	}
	
	
	public String setOrdersDetail(List<OrdersDetailModel> ordersDetailList) {
		
			try {
				for(OrdersDetailModel detail: ordersDetailList) {
					orderDetailRepository.save(detail);
				}
				return "OK";
			} catch (Exception e) {
				return e.getMessage();			}
		
	}
	
	
	
}
