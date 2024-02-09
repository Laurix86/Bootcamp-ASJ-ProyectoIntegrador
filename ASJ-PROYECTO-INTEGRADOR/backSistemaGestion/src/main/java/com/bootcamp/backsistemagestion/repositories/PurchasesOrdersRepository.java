package com.bootcamp.backsistemagestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.backsistemagestion.models.PurchasesOrderModel;

public interface PurchasesOrdersRepository extends JpaRepository<PurchasesOrderModel, Integer> {
	
	@Query(value="SELECT po.* FROM purchases-orders po WHERE po.is_active = false", nativeQuery=true)
	List<PurchasesOrderModel> getInactivePurchasesOrders();
	
	@Query(value="SELECT po.* FROM purchases-orders po WHERE po.is_active = true", nativeQuery=true)
	List<PurchasesOrderModel> getActivePurchasesOrders();
	
	@Query(value="SELECT po.* FROM purchases-orders po WHERE po.is_pending = false", nativeQuery=true)
	List<PurchasesOrderModel> getFinalizedPurchasesOrders();
	
	@Query(value="SELECT po.* FROM purchases-orders po WHERE po.is_pending = true", nativeQuery=true)
	List<PurchasesOrderModel> getPendingPurchasesOrders();
}
