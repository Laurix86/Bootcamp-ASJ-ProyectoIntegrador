package com.bootcamp.backsistemagestion.models;

import java.time.Instant;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="purchases_orders")
public class PurchasesOrderModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer purchases_orders_id;
	
	private String purchases_orders_code;
	
	@Temporal(TemporalType.DATE)
	private Date purchases_orders_date;
	
	@Temporal(TemporalType.DATE)
	private Date purchases_orders_delivery_date;
	private String purchases_orders_information;
	private Double purchases_orders_final_price;
	private Boolean is_pending;
	private Boolean is_active;
	
	@ManyToOne
	private ProvidersModel providers_id;
	
	private Instant created_at;
	private Instant updated_at;
	
	
	public PurchasesOrderModel(Integer purchases_orders_id, String purchases_orders_code,
			Date purchases_orders_date, Date purchases_orders_delivery_date,
			Double purchases_orders_final_price, ProvidersModel providers_id) {
		this.purchases_orders_id = purchases_orders_id;
		this.purchases_orders_code = purchases_orders_code;
		this.purchases_orders_date = purchases_orders_date;
		this.purchases_orders_delivery_date = purchases_orders_delivery_date;
		this.purchases_orders_final_price = purchases_orders_final_price;
		this.providers_id = providers_id;
		this.is_pending = true;
		this.is_active = true;
		this.created_at = Instant.now();
	}


	public String getPurchases_orders_code() {
		return purchases_orders_code;
	}


	public void setPurchases_orders_code(String purchases_orders_code) {
		this.purchases_orders_code = purchases_orders_code;
	}


	public Date getPurchases_orders_delivery_date() {
		return purchases_orders_delivery_date;
	}


	public void setPurchases_orders_delivery_date(Date purchases_orders_delivery_date) {
		this.purchases_orders_delivery_date = purchases_orders_delivery_date;
	}


	public String getPurchases_orders_information() {
		return purchases_orders_information;
	}


	public void setPurchases_orders_information(String purchases_orders_information) {
		this.purchases_orders_information = purchases_orders_information;
	}


	public Double getPurchases_orders_final_price() {
		return purchases_orders_final_price;
	}


	public void setPurchases_orders_final_price(Double purchases_orders_final_price) {
		this.purchases_orders_final_price = purchases_orders_final_price;
	}


	public Boolean getIs_pending() {
		return is_pending;
	}


	public void setIs_pending(Boolean is_pending) {
		this.is_pending = is_pending;
	}


	public Boolean getIs_active() {
		return is_active;
	}


	public void setIs_active(Boolean is_active) {
		this.is_active = is_active;
	}


	public ProvidersModel getProviders_id() {
		return providers_id;
	}


	public void setProviders_id(ProvidersModel providers_id) {
		this.providers_id = providers_id;
	}


	public Instant getUpdated_at() {
		return updated_at;
	}


	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}


	public Integer getPurchases_orders_id() {
		return purchases_orders_id;
	}


	public Date getPurchases_orders_date() {
		return purchases_orders_date;
	}


	public Instant getCreated_at() {
		return created_at;
	}
	
	
	
	
	
	

}
