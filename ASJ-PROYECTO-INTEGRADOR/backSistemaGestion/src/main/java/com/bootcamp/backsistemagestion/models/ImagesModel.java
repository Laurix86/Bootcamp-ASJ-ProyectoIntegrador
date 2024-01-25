package com.bootcamp.backsistemagestion.models;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="images")
public class ImagesModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer images_id;
	
	private String images_url;
	private Boolean is_deleted;
	
	@ManyToOne
	private ProductsModel product_id;
	
	private Instant created_at;
	private Instant updated_at;
	
	
	public ImagesModel() {
	}


	public ImagesModel(Integer images_id, String images_url, ProductsModel product_id) {
		this.images_id = images_id;
		this.images_url = images_url;
		this.product_id = product_id;
		this.is_deleted = false;
		this.created_at = Instant.now();
	}


	public String getImages_url() {
		return images_url;
	}


	public void setImages_url(String images_url) {
		this.images_url = images_url;
	}


	public Boolean getIs_deleted() {
		return is_deleted;
	}


	public void setIs_deleted(Boolean is_deleted) {
		this.is_deleted = is_deleted;
	}


	public ProductsModel getProduct_id() {
		return product_id;
	}


	public void setProduct_id(ProductsModel product_id) {
		this.product_id = product_id;
	}


	public Instant getUpdated_at() {
		return updated_at;
	}


	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}


	public Integer getImages_id() {
		return images_id;
	}


	public Instant getCreated_at() {
		return created_at;
	}
	
	
	
}
