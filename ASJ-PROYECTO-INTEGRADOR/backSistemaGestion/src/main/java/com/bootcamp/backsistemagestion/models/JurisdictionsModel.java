package com.bootcamp.backsistemagestion.models;

import java.time.Instant;
import java.util.List;

import jakarta.persistence.Entity;
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
	
	
	@ManyToOne
	@JoinColumn(name="countries_id")
	private CountriesModel countries_id;
	
	@OneToMany(mappedBy = "jurisdictions_id")
	private List<ProvidersModel> providers;
	
	private Instant created_at;
	private Instant updated_at;
	
	
	public JurisdictionsModel(int jurisdictions_id, String jurisdictions_name, CountriesModel countries) {
		this.jurisdictions_id = jurisdictions_id;
		this.jurisdictions_name = jurisdictions_name;
		this.countries_id = countries;
		this.is_deleted = false;
		this.created_at = Instant.now();
	}


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
