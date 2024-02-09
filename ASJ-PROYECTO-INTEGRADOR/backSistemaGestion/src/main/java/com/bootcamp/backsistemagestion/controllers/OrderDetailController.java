package com.bootcamp.backsistemagestion.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.models.OrdersDetailModel;
import com.bootcamp.backsistemagestion.models.PurchasesOrderModel;
import com.bootcamp.backsistemagestion.services.OrderDetailService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/order-detail")
public class OrderDetailController {
	
	@Autowired
	OrderDetailService orderDetailService;
	
	@GetMapping()
	public List<OrdersDetailModel> getAllOrdersDetail(){
		try {
			return orderDetailService.getAllOrdersDetail();
		}catch (Exception e) {
			
			List<OrdersDetailModel> auxOrdersDetail = new ArrayList<OrdersDetailModel>();
			
			return auxOrdersDetail;
		}
	}
	
	@GetMapping("/orders-by-purchase/{id}")
	public List<OrdersDetailModel> getOrdersByPurchasesOrders(@PathVariable int id){
		try {
			return orderDetailService.getOrdersByPurchasesOrders(id);
		}catch (Exception e) {
			
			List<OrdersDetailModel> auxOrdersDetail = new ArrayList<OrdersDetailModel>();
			
			return auxOrdersDetail;
		}
	}
	
	@PostMapping()
	public String saveOrdersDetail(@Valid @RequestBody List<OrdersDetailModel> orders) {
		try {
			return orderDetailService.setOrdersDetail(orders);
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	
	
	
}
