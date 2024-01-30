package com.bootcamp.backsistemagestion.models;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="providers")
public class ProvidersModel {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer providers_id;
	
	private String providers_code;
	private String providers_denomination;
	private String providers_website;
	private String providers_email;
	private String providers_phone;
	private String providers_cuit;
	private String providers_street;
	private String providers_addressNumber;
	private String providers_addressinfo;
	private String providers_logo;
	private String providers_city;
	private String providers_contact_firstname;
	private String providers_contact_lastname;
	private String providers_contact_phone;
	private String providers_contact_email;
	private String providers_contact_role;
	private Boolean is_deleted;
	
	@ManyToOne
	@JoinColumn(name="jurisdictions_id")
	private JurisdictionsModel jurisdictions_id; 
	
	@ManyToOne
	@JoinColumn(name="taxcategories_id")
	private TaxCategoriesModel taxcategories_id;
	
	@ManyToOne
	@JoinColumn(name="sectorsfields_id")
	private SectorsFieldModel sectorsfields_id;
		
	private Instant created_at;
	private Instant updated_at;
	
	
	
	public ProvidersModel() {
	}

	public ProvidersModel(Integer providers_id, String providers_code, String providers_denomination,
			String providers_email, String providers_phone, String providers_cuit, String providers_street,
			String providers_addressNumber, String providers_city, String providers_contact_firstname,
			String providers_contact_lastname, String providers_contact_phone, String providers_contact_email,
			String providers_contact_role, JurisdictionsModel jurisdictions_id, TaxCategoriesModel taxcategories_id,
			SectorsFieldModel sectorfields_id) {
		this.providers_id = providers_id;
		this.providers_code = providers_code;
		this.providers_denomination = providers_denomination;
		this.providers_email = providers_email;
		this.providers_phone = providers_phone;
		this.providers_cuit = providers_cuit;
		this.providers_street = providers_street;
		this.providers_addressNumber = providers_addressNumber;
		this.providers_city = providers_city;
		this.providers_contact_firstname = providers_contact_firstname;
		this.providers_contact_lastname = providers_contact_lastname;
		this.providers_contact_phone = providers_contact_phone;
		this.providers_contact_email = providers_contact_email;
		this.providers_contact_role = providers_contact_role;
		this.is_deleted = false;
		this.jurisdictions_id = jurisdictions_id;
		this.taxcategories_id = taxcategories_id;
		this.sectorsfields_id = sectorfields_id;
		this.created_at = Instant.now();
	}

	public String getProviders_code() {
		return providers_code;
	}

	public void setProviders_code(String providers_code) {
		this.providers_code = providers_code;
	}

	public String getProviders_denomination() {
		return providers_denomination;
	}

	public void setProviders_denomination(String providers_denomination) {
		this.providers_denomination = providers_denomination;
	}

	public String getProviders_website() {
		return providers_website;
	}

	public void setProviders_website(String providers_website) {
		this.providers_website = providers_website;
	}

	public String getProviders_email() {
		return providers_email;
	}

	public void setProviders_email(String providers_email) {
		this.providers_email = providers_email;
	}

	public String getProviders_phone() {
		return providers_phone;
	}

	public void setProviders_phone(String providers_phone) {
		this.providers_phone = providers_phone;
	}

	public String getProviders_cuit() {
		return providers_cuit;
	}

	public void setProviders_cuit(String providers_cuit) {
		this.providers_cuit = providers_cuit;
	}

	public String getProviders_street() {
		return providers_street;
	}

	public void setProviders_street(String providers_street) {
		this.providers_street = providers_street;
	}

	public String getProviders_addressNumber() {
		return providers_addressNumber;
	}

	public void setProviders_addressNumber(String providers_addressNumber) {
		this.providers_addressNumber = providers_addressNumber;
	}

	public String getProviders_addressinfo() {
		return providers_addressinfo;
	}

	public void setProviders_addressinfo(String providers_addressinfo) {
		this.providers_addressinfo = providers_addressinfo;
	}

	public String getProviders_logo() {
		return providers_logo;
	}

	public void setProviders_logo(String providers_logo) {
		this.providers_logo = providers_logo;
	}

	public String getProviders_city() {
		return providers_city;
	}

	public void setProviders_city(String providers_city) {
		this.providers_city = providers_city;
	}

	public String getProviders_contact_firstname() {
		return providers_contact_firstname;
	}

	public void setProviders_contact_firstname(String providers_contact_firstname) {
		this.providers_contact_firstname = providers_contact_firstname;
	}

	public String getProviders_contact_lastname() {
		return providers_contact_lastname;
	}

	public void setProviders_contact_lastname(String providers_contact_lastname) {
		this.providers_contact_lastname = providers_contact_lastname;
	}

	public String getProviders_contact_phone() {
		return providers_contact_phone;
	}

	public void setProviders_contact_phone(String providers_contact_phone) {
		this.providers_contact_phone = providers_contact_phone;
	}

	public String getProviders_contact_email() {
		return providers_contact_email;
	}

	public void setProviders_contact_email(String providers_contact_email) {
		this.providers_contact_email = providers_contact_email;
	}

	public String getProviders_contact_role() {
		return providers_contact_role;
	}

	public void setProviders_contact_role(String providers_contact_role) {
		this.providers_contact_role = providers_contact_role;
	}

	public Boolean getIs_deleted() {
		return is_deleted;
	}

	public void setIs_deleted(Boolean is_deleted) {
		this.is_deleted = is_deleted;
	}

	public JurisdictionsModel getJurisdictions_id() {
		return jurisdictions_id;
	}

	public void setJurisdictions_id(JurisdictionsModel jurisdictions_id) {
		this.jurisdictions_id = jurisdictions_id;
	}

	public TaxCategoriesModel getTaxcategories_id() {
		return taxcategories_id;
	}

	public void setTaxcategories_id(TaxCategoriesModel taxcategories_id) {
		this.taxcategories_id = taxcategories_id;
	}

	public SectorsFieldModel getSectorsfields_id() {
		return sectorsfields_id;
	}

	public void setSectorsfields_id(SectorsFieldModel sectorsfields_id) {
		this.sectorsfields_id = sectorsfields_id;
	}

	public Instant getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Instant updated_at) {
		this.updated_at = updated_at;
	}

	public Integer getProviders_id() {
		return providers_id;
	}

	public Instant getCreated_at() {
		return created_at;
	}
	
	
	
	
}
