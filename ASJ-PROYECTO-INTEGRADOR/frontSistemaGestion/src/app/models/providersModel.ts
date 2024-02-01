export interface ProvidersModel {
    id?: number;
    code: string;
    denomination:string;
    website?: string | null;
    email: string;
    phone: string;
    cuit: string;
    street: string;
    addressNumber: number;
    addressInfo?: string | null;
    logo?: string | null;
    city: string;
    contact_firstName: string;
    contact_lastName: string;
    contact_phone: string;
    contact_email: string;
    contact_role: string;
    is_deleted: boolean;
    jurisdictions:{
      id: number;
      name: string;
      country:{
        id: number;
        name: string;
      }
    };
    taxCategories: {
      id: number;
      taxName: string;
    };
    sectorsField:{
      id: number;
      sectorName: string;
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