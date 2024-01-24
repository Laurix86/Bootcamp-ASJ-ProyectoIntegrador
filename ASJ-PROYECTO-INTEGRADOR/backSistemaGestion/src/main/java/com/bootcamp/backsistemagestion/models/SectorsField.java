package com.bootcamp.backsistemagestion.models;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="sectorsfield")
public class SectorsField {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sectorsfield_id;
	
	private String sectorsfield_name;
	
	private Instant created_at;
	private Instant updated_at;
	
	public SectorsField(int sectorsfield_id, String sectorsfield_name) {
		this.sectorsfield_id = sectorsfield_id;
		this.sectorsfield_name = sectorsfield_name;
		this.created_at = Instant.now();
	}
	public String getSectorsfield_name() {
		return sectorsfield_name;
	}
	public void setSectorsfield_name(String sectorsfield_name) {
		this.sectorsfield_name = sectorsfield_name;
	}
	public Instant getUpdated_at() {
		return updated_at;
	}
	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}
	public int getSectorsfield_id() {
		return sectorsfield_id;
	}
	public Instant getCreated_at() {
		return created_at;
	}
	
	
}
