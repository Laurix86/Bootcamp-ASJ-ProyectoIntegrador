package com.bootcamp.backsistemagestion.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.exceptions.ErrorHandler;
import com.bootcamp.backsistemagestion.models.PurchasesOrderModel;
import com.bootcamp.backsistemagestion.services.OrderDetailService;
import com.bootcamp.backsistemagestion.services.PurchaseOrderService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/purchase-order")
public class PurchaseOrderController {
	
	@Autowired
	PurchaseOrderService purchaseOrderService;
	
	@Autowired
	OrderDetailService orderDetailService;
	
	@GetMapping()
	public List<PurchasesOrderModel> getAllPurchasesOrder() {
		try {
			return purchaseOrderService.getAllPurchasesOrder();
		}catch (Exception e) {
			
			List<PurchasesOrderModel> auxPurchaseOrder = new ArrayList<PurchasesOrderModel>();
			
			return auxPurchaseOrder;
		}
		
	}
	
	@GetMapping("/{id}")
	public PurchasesOrderModel getPurchaseOrderById(@PathVariable int id) {
		return purchaseOrderService.getPurchaseOrderById(id);
	}
	
	
	@GetMapping("/active")
	public List<PurchasesOrderModel> getActivePurchasesOrder() {
		try {
			return purchaseOrderService.getPurchasesOrdersByState(true);
		}catch (Exception e) {
			
			List<PurchasesOrderModel> auxPurchaseOrder = new ArrayList<PurchasesOrderModel>();
			
			return auxPurchaseOrder;
		}
		
	}
	
	@GetMapping("/inactive")
	public List<PurchasesOrderModel> getInactivePurchasesOrder() {
		try {
			return purchaseOrderService.getPurchasesOrdersByState(false);
		}catch (Exception e) {
			
			List<PurchasesOrderModel> auxPurchaseOrder = new ArrayList<PurchasesOrderModel>();
			
			return auxPurchaseOrder;
		}
		
	}
	
	@GetMapping("/pending")
	public List<PurchasesOrderModel> getFinalizedPurchasesOrder() {
		try {
			return purchaseOrderService.getPurchasesOrdersByPending(true);
		}catch (Exception e) {
			
			List<PurchasesOrderModel> auxPurchaseOrder = new ArrayList<PurchasesOrderModel>();
			
			return auxPurchaseOrder;
		}
		
	}
	
	@GetMapping("/finalized")
	public List<PurchasesOrderModel> getPendingPurchasesOrder() {
		try {
			return purchaseOrderService.getPurchasesOrdersByPending(false);
		}catch (Exception e) {
			
			List<PurchasesOrderModel> auxPurchaseOrder = new ArrayList<PurchasesOrderModel>();
			
			return auxPurchaseOrder;
		}
		
	}
	
	@PostMapping()
	public ResponseEntity<Integer> savePurchaseOrder(@Valid @RequestBody PurchasesOrderModel purchaseOrder) {
	    try {
	        int orderId = purchaseOrderService.setPurchaseOrder(purchaseOrder);
	        return ResponseEntity.ok().body(orderId);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1); 
	    }
	}
	
	
	@PutMapping("/active/{id}")
	public ResponseEntity<Object> editActivePurchaseOrder(@PathVariable int id,@Valid @RequestBody PurchasesOrderModel purchaseOrder, BindingResult bindingResult){
		if(bindingResult.hasErrors()) {
			
			Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
			
			System.out.println(errors);
			
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		
		try {
			return new ResponseEntity<>(purchaseOrderService.editActivePurchaseOrder(id, purchaseOrder), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/pending/{id}")
	public ResponseEntity<Object> editPendingPurchaseOrder(@PathVariable int id,@Valid @RequestBody PurchasesOrderModel purchaseOrder, BindingResult bindingResult){
		if(bindingResult.hasErrors()) {
			
			Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
			
			System.out.println(errors);
			
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		
		try {
			return new ResponseEntity<>(purchaseOrderService.editPendingPurchaseOrder(id, purchaseOrder), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
		}
	}
	
	
}
