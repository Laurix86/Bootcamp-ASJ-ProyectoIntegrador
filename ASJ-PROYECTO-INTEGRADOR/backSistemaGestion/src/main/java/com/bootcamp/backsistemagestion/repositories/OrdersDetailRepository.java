package com.bootcamp.backsistemagestion.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.backsistemagestion.models.OrdersDetailModel;

public interface OrdersDetailRepository extends JpaRepository<OrdersDetailModel, Integer> {
	
	@Query(value= "SELECT od.* FROM orders_detail od WHERE od.purchases_order_id = :purchaseOrderId", nativeQuery = true)
	List<OrdersDetailModel> getDetailsByPurchasesOrder(@Param("purchaseOrderId") Integer purchaseOrderId);
	
}
