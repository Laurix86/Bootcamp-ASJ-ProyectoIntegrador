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
@Table(name="countries")
public class CountriesModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer countries_id;
	
	//@NotBlank(message = "El nombre del país no puede estar vacío")
	private String countries_name;
	private Boolean is_deleted;
	
	
//	 @JsonManagedReference
	 @OneToMany(mappedBy = "countries_id") 
	 @JsonIgnore
	 private List<JurisdictionsModel> jurisdictions = new ArrayList<JurisdictionsModel>();
//	 


	
	private Instant created_at;
	private Instant updated_at;


	
	
	public CountriesModel() {
		
	}

	/*public CountriesModel(String countries_name) {
		
		this.countries_name = countries_name;
		this.is_deleted = false;
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

	public String getCountries_name() {
		return countries_name;
	}



	public void setCountries_name(String countries_name) {
		this.countries_name = countries_name;
	}



	public Integer getCountries_id() {
		return countries_id;
	}



	public Instant getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
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

	
//	public List<JurisdictionsModel> getJurisdictions_id() {
//		return jurisdictions_id;
//	}
//
//	public void setJurisdictions_id(List<JurisdictionsModel> jurisdictions_id) {
//		this.jurisdictions_id = jurisdictions_id;
//	}
	
	
	
	
	
}
