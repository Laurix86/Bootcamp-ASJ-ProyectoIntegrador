package com.bootcamp.backsistemagestion.models;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name="taxcategories")
public class TaxCategoriesModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer taxcategories_id;
	
	private String taxcategories_denominations;
	private Boolean is_deleted;
	
	/*
	 * @JsonManagedReference
	 *  */
	 @OneToMany(mappedBy = "taxcategories_id") 
	 @JsonIgnore
	 private List<ProvidersModel> providers = new ArrayList<ProvidersModel>();
	
	
	private Instant created_at;
	private Instant updated_at;
	
	
	
	public TaxCategoriesModel() {
	}

	public TaxCategoriesModel(int taxcategories_id, String taxcategories_denominations) {
		this.taxcategories_id = taxcategories_id;
		this.taxcategories_denominations = taxcategories_denominations;
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
	
	public String getTaxcategories_denominations() {
		return taxcategories_denominations;
	}
	public void setTaxcategories_denominations(String taxcategories_denominations) {
		this.taxcategories_denominations = taxcategories_denominations;
	}
	public Instant getUpdated_at() {
		return updated_at;
	}
	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}
	public int getTaxcategories_id() {
		return taxcategories_id;
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
