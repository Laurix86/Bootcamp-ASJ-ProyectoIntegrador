package com.bootcamp.backsistemagestion.models;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="jurisdictions")
public class JurisdictionsModel {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer jurisdictions_id;
	
	private String jurisdictions_name;
	
	@ManyToOne
	private CountriesModel country_id;
	
	private Instant created_at;
	private Instant updated_at;
	
	
	public JurisdictionsModel(int jurisdictions_id, String jurisdictions_name, CountriesModel country) {
		this.jurisdictions_id = jurisdictions_id;
		this.jurisdictions_name = jurisdictions_name;
		this.country_id = country;
		this.created_at = Instant.now();
	}


	public String getJurisdictions_name() {
		return jurisdictions_name;
	}


	public void setJurisdictions_name(String jurisdictions_name) {
		this.jurisdictions_name = jurisdictions_name;
	}


	public CountriesModel getCountry() {
		return country_id;
	}


	public void setCountry(CountriesModel country) {
		this.country_id = country;
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
	
	
	
	
}
