export interface ProvidersModel {
    id?: number;
    code: string;
    denomination:string;
    website: string;
    email: string;
    phone: string;
    cuit: string;
    street: string;
    addressNumber: number;
    addressInfo: string;
    logo: string;
    city: string;
    contact_firstName: string;
    contact_lastName: string;
    contact_phone: string;
    contact_email: string;
    contact_role: string;
    is_deleted: boolean;
    jurisdiction_id: 
    rubro:string;
 
   
    calle:string;
    altura:number,
    ciudad: string;
    provincia: string;
    pais: string;
   
    condIVA: string;
    nombre:string;
    apellido:string;
    teleContacto: string;
    mailContacto: string;
    rolContacto: string;
    activo: boolean
  }

  export interface JurisdictionsModel{
    
  }