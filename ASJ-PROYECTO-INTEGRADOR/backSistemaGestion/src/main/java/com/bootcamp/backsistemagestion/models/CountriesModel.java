package com.bootcamp.backsistemagestion.models;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="countries")
public class CountriesModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer country_id;
	
	//@NotBlank(message = "El nombre del país no puede estar vacío")
	private String country_name;
	
	private Instant created_at;
	private Instant updated_at;


	public CountriesModel(int country_id, String country_name) {
		this.country_id = country_id;
		this.country_name = country_name;
		this.created_at = Instant.now();
	}

	public String getCountry_name() {
		return country_name;
	}

	public void setCountry_name(String country_name) {
		this.country_name = country_name;
	}

	public int getCountry_id() {
		return country_id;
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
	
	
	
	
}
