package com.bootcamp.backsistemagestion.models;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="categories")
public class CategoriesModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer categories_id;
	
	private String categories_denominations;
	private Boolean is_deleted;
	

	 @OneToMany(mappedBy = "categories_id") 
	 @JsonIgnore
	 private List<ProductsModel> productsList = new ArrayList<ProductsModel>();
	 
	
	private Instant created_at;
	private Instant updated_at;
	
	
	
	
	public CategoriesModel() {
	}


	public CategoriesModel(int categories_id, String categories_denominations) {
		this.categories_id = categories_id;
		this.categories_denominations = categories_denominations;
		this.is_deleted = false;
		this.created_at = Instant.now();
	}


	public String getCategories_denominations() {
		return categories_denominations;
	}


	public void setCategories_denominations(String categories_denominations) {
		this.categories_denominations = categories_denominations;
	}


	public Instant getUpdated_at() {
		return updated_at;
	}


	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}


	public int getCategories_id() {
		return categories_id;
	}


	public Instant getCreated_at() {
		return created_at;
	}


	public Boolean getIs_deleted() {
		return is_deleted;
	}


	public void setIs_deleted(Boolean is_deleted) {
		this.is_deleted = is_deleted;
	}
	
	
	
	
}
