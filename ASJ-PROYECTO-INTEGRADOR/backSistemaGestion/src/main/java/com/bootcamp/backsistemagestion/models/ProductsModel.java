package com.bootcamp.backsistemagestion.models;

import java.time.Instant;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
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
	
	//@JsonBackReference
	@ManyToOne
	@JoinColumn(name="providers_id")
	private ProvidersModel providers_id;
	
//	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="categories_id")
	private CategoriesModel categories_id;
	
	/*
	 * @JsonManagedReference
	 * 
	 * @OneToMany(mappedBy = "products_id") private List<OrdersDetailModel>
	 * OrdersDetailList;
	 * 
	 * @JsonManagedReference
	 * 
	 * @OneToMany(mappedBy = "product_id") private List<ImagesModel> ImagesList;
	 */
	private Instant created_at;
	private Instant updated_at;
	
	
	
	public ProductsModel() {
	}



	public ProductsModel(Integer products_id, String products_sku, String products_denomination, Double products_price,
			Integer products_stock, ProvidersModel providers_id, CategoriesModel categories_id) {
		this.products_id = products_id;
		this.products_sku = products_sku;
		this.products_denomination = products_denomination;
		this.products_price = products_price;
		this.products_stock = products_stock;
		this.providers_id = providers_id;
		this.categories_id = categories_id;
		this.is_deleted = false;
		this.created_at = Instant.now();
	}


	@PrePersist
    private void prePersist() {
        this.created_at = Instant.now();
    }
	
	@PreUpdate
    private void preUpdate() {
        this.updated_at = Instant.now();
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



	public Boolean getIs_deleted() {
		return is_deleted;
	}



	public void setIs_deleted(Boolean is_deleted) {
		this.is_deleted = is_deleted;
	}



	public ProvidersModel getProviders_id() {
		return providers_id;
	}



	public void setProvider_id(ProvidersModel providers_id) {
		this.providers_id = providers_id;
	}



	public Instant getUpdated_at() {
		return updated_at;
	}



	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}



	public CategoriesModel getCategories_id() {
		return categories_id;
	}



	public Instant getCreated_at() {
		return created_at;
	}
	
	
	
	
	

}
