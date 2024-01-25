package com.bootcamp.backsistemagestion.models;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="orders_detail")
public class OrdersDetailModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orders_detail_id;
	
	private Double orders_detail_product_price;
	private Integer orders_detail_quantity;
	
	@ManyToOne
	private ProductsModel products_id;
	
	@ManyToOne
	private PurchasesOrderModel purchases_order_id;
	
	private Instant created_at;
	private Instant updated_at;
	public OrdersDetailModel(Integer orders_detail_id, Double orders_detail_product_price,
			Integer orders_detail_quantity, ProductsModel products_id, PurchasesOrderModel purchases_order_id) {
		this.orders_detail_id = orders_detail_id;
		this.orders_detail_product_price = orders_detail_product_price;
		this.orders_detail_quantity = orders_detail_quantity;
		this.products_id = products_id;
		this.purchases_order_id = purchases_order_id;
		this.created_at = Instant.now();
	}
	public Double getOrders_detail_product_price() {
		return orders_detail_product_price;
	}
	public void setOrders_detail_product_price(Double orders_detail_product_price) {
		this.orders_detail_product_price = orders_detail_product_price;
	}
	public Integer getOrders_detail_quantity() {
		return orders_detail_quantity;
	}
	public void setOrders_detail_quantity(Integer orders_detail_quantity) {
		this.orders_detail_quantity = orders_detail_quantity;
	}
	public ProductsModel getProducts_id() {
		return products_id;
	}
	public void setProducts_id(ProductsModel products_id) {
		this.products_id = products_id;
	}
	public PurchasesOrderModel getPurchases_order_id() {
		return purchases_order_id;
	}
	public void setPurchases_order_id(PurchasesOrderModel purchases_order_id) {
		this.purchases_order_id = purchases_order_id;
	}
	public Instant getUpdated_at() {
		return updated_at;
	}
	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}
	public Integer getOrders_detail_id() {
		return orders_detail_id;
	}
	public Instant getCreated_at() {
		return created_at;
	}
	
	
	

}
