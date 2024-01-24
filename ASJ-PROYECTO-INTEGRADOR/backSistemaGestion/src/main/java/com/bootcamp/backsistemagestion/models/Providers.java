package com.bootcamp.backsistemagestion.models;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="providers")
public class Providers {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int providers_id;
	
	private String providers_code;
	
	
	private Instant created_at;
	private Instant updated_at;
}
