export interface ProvidersModel {
    providers_id?: number;
    providers_code: string;
    providers_denomination:string;
    providers_website?: string | null;
    providers_email: string;
    providers_phone: string;
    providers_cuit: string;
    providers_street: string;
    providers_addressNumber: number;
    providers_addressInfo?: string | null;
    providers_logo?: string | null;
    providers_city: string;
    providers_contact_firstName: string;
    providers_contact_lastName: string;
    providers_contact_phone: string;
    providers_contact_email: string;
    providers_contact_role: string;
    is_deleted: boolean;
    jurisdictions_id:{
      jurisdictions_id: number;
      jurisdictions_name: string;
      countries:{
        countries_id: number;
        countries_name: string;
      }
    };
    taxCategories_id: {
      taxCategories_id: number;
      taxCategories_denomination: string;
    };
    sectorsField_id:{
      sectorsfield_id: number;
      sectorsfield_name: string;
    }
  }

  export interface JurisdictionsModel{
    jurisdictions_id?: number;
    jurisdictions_name: string;
  }

  export interface CountriesModel{
    countries_id: number;
    countries_name: string;
  }