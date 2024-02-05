package com.bootcamp.backsistemagestion.models;

import java.time.Instant;
import java.util.ArrayList;
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
import jakarta.persistence.Table;

@Entity
@Table(name="jurisdictions")
public class JurisdictionsModel {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer jurisdictions_id;
	
	private String jurisdictions_name;
	private Boolean is_deleted;
	
	
	//@JsonBackReference
	// @JoinColumn(name="countries_id")
	@ManyToOne(fetch = FetchType.EAGER)
	private CountriesModel countries_id;
	
	
	/*
	 * @JsonManagedReference
	 * */
	 @OneToMany(mappedBy = "jurisdictions_id") 
	 @JsonIgnore
	 private List<ProvidersModel> providers = new ArrayList<ProvidersModel>();
	 
	 
	
	private Instant created_at;
	private Instant updated_at;
	
	
	
	public JurisdictionsModel() {
	}


	/*public JurisdictionsModel(String jurisdictions_name, CountriesModel countries) {
		
		this.jurisdictions_name = jurisdictions_name;
		this.countries_id = countries;
		this.is_deleted = false;
		this.created_at = Instant.now();
	}*/


	public String getJurisdictions_name() {
		return jurisdictions_name;
	}


	public void setJurisdictions_name(String jurisdictions_name) {
		this.jurisdictions_name = jurisdictions_name;
	}


	public CountriesModel getCountries() {
		return countries_id;
	}


	public void setCountries(CountriesModel countries) {
		this.countries_id = countries;
	}


	public Instant getUpdated_at() {
		return updated_at;
	}


	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}


	public int getJurisdictions_id() {
		return jurisdictions_id;
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
