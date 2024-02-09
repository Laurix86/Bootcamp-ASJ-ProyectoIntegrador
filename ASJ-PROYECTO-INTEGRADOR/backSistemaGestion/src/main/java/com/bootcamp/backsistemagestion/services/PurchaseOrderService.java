package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.exceptions.ResourceNotFoundException;
import com.bootcamp.backsistemagestion.models.PurchasesOrderModel;
import com.bootcamp.backsistemagestion.repositories.OrdersDetailRepository;
import com.bootcamp.backsistemagestion.repositories.PurchasesOrdersRepository;

@Service
public class PurchaseOrderService {

	@Autowired
	OrdersDetailRepository orderDetailRepository;
	
	@Autowired
	PurchasesOrdersRepository purchasesOrderRepository;
	
	public List<PurchasesOrderModel> getAllPurchasesOrder(){
		return purchasesOrderRepository.findAll();
	}
	
	public PurchasesOrderModel getPurchaseOrderById(int id) {
		PurchasesOrderModel purchaseOrder = purchasesOrderRepository.findById(id).orElseThrow(
				() -> {
					throw new ResourceNotFoundException("No se halló la orden solicitada");
				});
		
		return purchaseOrder;
				
	}
	
	public List<PurchasesOrderModel> getPurchasesOrdersByState(boolean state){
		if(state) {
			return purchasesOrderRepository.getActivePurchasesOrders();
		}else {
			return purchasesOrderRepository.getInactivePurchasesOrders();
		}
	}
	
	public List<PurchasesOrderModel> getPurchasesOrdersByPending(boolean state){
		if(state) {
			return purchasesOrderRepository.getPendingPurchasesOrders();
		}else {
			return purchasesOrderRepository.getFinalizedPurchasesOrders();
		}
	}
	
	public int setPurchaseOrder(PurchasesOrderModel purchaseOrder) {
		try {
			PurchasesOrderModel auxPurchaseOrder = purchasesOrderRepository.save(purchaseOrder);
			return auxPurchaseOrder.getPurchases_order_id();
		} catch (Exception e) {
			return 0;
		}
	}
	
	public String editActivePurchaseOrder(int id, PurchasesOrderModel purchaseOrder) {
		
		try {
			Optional<PurchasesOrderModel> po = purchasesOrderRepository.findById(id);
			
			if(po.isPresent()) {
				PurchasesOrderModel auxPo = po.get();
				auxPo.setIs_active(!purchaseOrder.getIs_active());
				purchasesOrderRepository.save(auxPo);
				return "OK";
			}else {
				throw new Exception("Error al editar la orden");
			}
		} catch (Exception e) {
			return e.getMessage();
		}
	}
	
	public String editPendingPurchaseOrder(int id, PurchasesOrderModel purchaseOrder) {
			
			try {
				Optional<PurchasesOrderModel> po = purchasesOrderRepository.findById(id);
				
				if(po.isPresent()) {
					PurchasesOrderModel auxPo = po.get();
					auxPo.setIs_pending(!purchaseOrder.getIs_pending());
					purchasesOrderRepository.save(auxPo);
					return "OK";
				}else {
					throw new Exception("Error al editar la orden");
				}
			} catch (Exception e) {
				return e.getMessage();
			}
		}
	
	
}
