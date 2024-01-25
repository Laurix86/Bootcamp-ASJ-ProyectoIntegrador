package com.bootcamp.backsistemagestion.models;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class ProductsModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer products_id;
	
	private String products_sku;
	
	private String products_denomination;
	private String products_description;
	private Double products_price;
	private Integer products_stock;
	private Boolean is_deleted;
	
	@ManyToOne
	private ProvidersModel provider_id;
	
	@ManyToOne
	private CategoriesModel category_id;
	
	private Instant created_at;
	private Instant updated_at;
	
	
	
	public ProductsModel() {
	}



	public ProductsModel(Integer products_id, String products_sku, String products_denomination, Double products_price,
			Integer products_stock, ProvidersModel provider_id, CategoriesModel category_id) {
		this.products_id = products_id;
		this.products_sku = products_sku;
		this.products_denomination = products_denomination;
		this.products_price = products_price;
		this.products_stock = products_stock;
		this.provider_id = provider_id;
		this.category_id = category_id;
		this.is_deleted = false;
		this.created_at = Instant.now();
	}



	public Integer getProducts_id() {
		return products_id;
	}



	public void setProducts_id(Integer products_id) {
		this.products_id = products_id;
	}



	public String getProducts_sku() {
		return products_sku;
	}



	public void setProducts_sku(String products_sku) {
		this.products_sku = products_sku;
	}



	public String getProducts_denomination() {
		return products_denomination;
	}



	public void setProducts_denomination(String products_denomination) {
		this.products_denomination = products_denomination;
	}



	public String getProducts_description() {
		return products_description;
	}



	public void setProducts_description(String products_description) {
		this.products_description = products_description;
	}



	public Double getProducts_price() {
		return products_price;
	}



	public void setProducts_price(Double products_price) {
		this.products_price = products_price;
	}



	public Integer getProducts_stock() {
		return products_stock;
	}



	public void setProducts_stock(Integer products_stock) {
		this.products_stock = products_stock;
	}



	public Boolean getIs_eliminado() {
		return is_deleted;
	}



	public void setIs_eliminado(Boolean is_eliminado) {
		this.is_deleted = is_eliminado;
	}



	public ProvidersModel getProvider_id() {
		return provider_id;
	}



	public void setProvider_id(ProvidersModel provider_id) {
		this.provider_id = provider_id;
	}



	public Instant getUpdated_at() {
		return updated_at;
	}



	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}



	public CategoriesModel getCategory_id() {
		return category_id;
	}



	public Instant getCreated_at() {
		return created_at;
	}
	
	
	
	
	

}
