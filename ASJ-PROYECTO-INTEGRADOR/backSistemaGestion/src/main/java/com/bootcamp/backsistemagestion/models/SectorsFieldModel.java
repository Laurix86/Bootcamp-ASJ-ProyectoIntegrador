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
@Table(name="sectorsfield")
public class SectorsFieldModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer sectorsfield_id;
	
	private String sectorsfield_name;
	private Boolean is_deleted;
	
	/*
	 * @JsonManagedReference
	 * */
	 @OneToMany(mappedBy = "sectorsfield_id")
	 @JsonIgnore
	 private List<ProvidersModel> providers = new ArrayList<ProvidersModel>();
	 
	
	private Instant created_at;
	private Instant updated_at;
	
	
	
	public SectorsFieldModel() {
	}

	/*public SectorsFieldModel(int sectorsfield_id, String sectorsfield_name) {
		this.sectorsfield_id = sectorsfield_id;
		this.sectorsfield_name = sectorsfield_name;
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
	public Boolean getIs_deleted() {
		return is_deleted;
	}
	public void setIs_deleted(Boolean is_deleted) {
		this.is_deleted = is_deleted;
	}
	
	
}
