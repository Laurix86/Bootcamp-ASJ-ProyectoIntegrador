package com.bootcamp.backsistemagestion.models;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="purchases_orders")
public class PurchasesOrderModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer purchases_order_id;
	
	private String purchases_order_code;
	
	@Temporal(TemporalType.DATE)
	private Date purchases_order_date;
	
	@Temporal(TemporalType.DATE)
	private Date purchases_order_delivery_date;
	
	private String purchases_order_information;
	private Double purchases_order_final_price;
	private Boolean is_pending;
	private Boolean is_active;
	
	//@JsonBackReference
	@ManyToOne(fetch = FetchType.EAGER)
	private ProvidersModel providers_id;
	
	/*
	 * @JsonManagedReference
	 * */
	 @OneToMany(mappedBy = "purchases_order_id") 
	 @JsonIgnore
	 private List<OrdersDetailModel>OrdersDetailList = new ArrayList<OrdersDetailModel>();
	 
	
	private Instant created_at;
	private Instant updated_at;



	
	
	public PurchasesOrderModel() {
	}


	/*public PurchasesOrderModel(String purchases_order_code, Date purchases_order_date, Date purchases_order_delivery_date,
		Double purchases_order_final_price, ProvidersModel providers_id) {
	this.purchases_order_code = purchases_order_code;
	this.purchases_order_date = purchases_order_date;
	this.purchases_order_delivery_date = purchases_order_delivery_date;
	this.purchases_order_final_price = purchases_order_final_price;
	this.providers_id = providers_id;
	this.is_pending = true;
	this.is_active = true;
	this.created_at = Instant.now();
}*/


	
	@PrePersist
    private void prePersist() {
        this.created_at = Instant.now();
    }
	
	@PreUpdate
    private void preUpdate() {
        this.updated_at = Instant.now();
    }
	
	public String getPurchases_order_code() {
		return purchases_order_code;
	}


	public void setPurchases_order_code(String purchases_order_code) {
		this.purchases_order_code = purchases_order_code;
	}


	public Date getPurchases_order_delivery_date() {
		return purchases_order_delivery_date;
	}


	public void setPurchases_order_delivery_date(Date purchases_order_delivery_date) {
		this.purchases_order_delivery_date = purchases_order_delivery_date;
	}


	public String getPurchases_order_information() {
		return purchases_order_information;
	}


	public void setPurchases_order_information(String purchases_order_information) {
		this.purchases_order_information = purchases_order_information;
	}


	public Double getPurchases_order_final_price() {
		return purchases_order_final_price;
	}


	public void setPurchases_order_final_price(Double purchases_order_final_price) {
		this.purchases_order_final_price = purchases_order_final_price;
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


	public Integer getPurchases_order_id() {
		return purchases_order_id;
	}


	public Date getPurchases_order_date() {
		return purchases_order_date;
	}


	public Instant getCreated_at() {
		return created_at;
	}
	
	
	
	
	
	

}
