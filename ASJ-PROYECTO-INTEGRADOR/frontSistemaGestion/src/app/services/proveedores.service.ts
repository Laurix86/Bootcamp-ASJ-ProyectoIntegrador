import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {ProvidersModel} from '../models/providersModel'
import { SectorsFiedlModel } from '../models/sectorsFieldModel';
import { TaxCategoriesModel } from '../models/taxCategoriesModel';
import { JurisdictionsModel } from '../models/providersModel';
import { CountriesModel } from '../models/providersModel';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  //public rubroLista: SectorsFiedlModel[]=[];

  private apiProviders = 'http://localhost:8080/providers';
  private apiSectorsField = 'http://localhost:8080/sectors';
  private apiTaxCategories = 'http://localhost:8080/taxcategories';
  private apiCountries = 'http://localhost:8080/countries';
  private apiJurisdictions = 'http://localhost:8080/jurisdictions';

  constructor(private http: HttpClient) { }


  /* providerModelArr: ProviderModel[] = [];
  oneProvider: ProviderModel= {
    code: '',
    razonSocial: '',
    rubro: '',
    sitioWeb: '',
    email: '',
    telefono: '',
    calle: '',
    altura:0,
    ciudad: '',
    provincia: '',
    pais: '',
    cuit: '',
    condIVA: "Responsable Inscripto" || "Autónomo" || "Monotributista" || "Exento" || "Consumidor Final",
    nombre: '',
    apellido: '',
    teleContacto: '',
    mailContacto: '',
    rolContacto: '',
    activo: false
  };
 */


  //Complete List
  public getAllProviders(): Observable<ProvidersModel[]>{

    return this.http.get<ProvidersModel[]>(this.apiProviders);
      /* const auxListado = localStorage.getItem("provider");
      if(auxListado){
        this.providerModelArr = JSON.parse(auxListado);
      }else{
        this.providerModelArr = [];
      }
      //this.providerModelArr = JSON.parse(localStorage.getItem("provider")!) || [];
      return this.providerModelArr; 
    */
  }

  // Only Active Providers List
  public getActiveProviders(): Observable<ProvidersModel[]>{

    return this.http.get<ProvidersModel[]>(this.apiProviders+`/activeProviders`);

   /* return this.http.get<any>(this.apiProviders).pipe(
      map((auxActiveProviders) => {
        if (auxActiveProviders == null) {
          return null;
        } else {
          console.log("auxArr", this.getAllProviders());
          const providersList = auxActiveProviders.filter((elem: any) => elem.activo);
          return providersList;
        }
      })
    );*/
    /* const auxActiveProviders = this.http.get<any>(this.apiProviders);

    if(auxActiveProviders == null){
      return null;
    }else{

      console.log("auxArr",this.getAllProviders())
      const providersList = auxActiveProviders.filter(elem => elem.activo);
      return providersList;
    } */
  }

   public getProviderById(index: number){
    return this.http.get<ProvidersModel>(this.apiProviders+`/${index}`);
   
  } 

  // Save new Provider
  public  saveProvider (infoProvider: ProvidersModel, indexId: number){
    //const auxProveedores = this.getAllProviders();
    if(indexId ==-1){
      this.http.post<any[]>(this.apiProviders, infoProvider, { observe: 'response', responseType: 'text' as 'json'  });
     /* infoProvider.id = auxProveedores.length;
      auxProveedores.push(infoProvider);
      localStorage.setItem("provider", JSON.stringify(auxProveedores));*/
    } else{

      this.http.put<any[]>(this.apiProviders + `/${infoProvider.providers_id}`, infoProvider, { observe: 'response', responseType: 'text' as 'json'  });
      /*this.providerModelArr = auxProveedores.map(elem => {
        if(elem.id == indexId){
          elem = infoProvider;
        }
        return elem;
      })
      
      localStorage.setItem("provider", JSON.stringify(this.providerModelArr));*/

    }
  }

  public getTaxCategories(): Observable<TaxCategoriesModel[]>{
    return this.http.get<TaxCategoriesModel[]>(this.apiTaxCategories);
  }

  public getRubros(): Observable<SectorsFiedlModel[]>{

    return this.http.get<SectorsFiedlModel[]>(this.apiSectorsField);
  }

  public getCountries():Observable<CountriesModel[]>{
    return this.http.get<CountriesModel[]>(this.apiCountries);
  }

  public getJurisdictionsByCountry(countryId: number):Observable<JurisdictionsModel[]>{
    return this.http.get<JurisdictionsModel[]>(this.apiJurisdictions+`/country/${countryId}`);
  }

 
  public getProvidersByRubro(rubro: string){
    /* let nombreProv: any[] = [];
    let activeProv = this.getActiveProviders();
    
      this.getActiveProviders().pipe(
        map(elem => 
          { if(elem.sectorsField_id == rubro){
            nombreProv.push(elem.razonSocial)
            }});
      
      return nombreProv;

      );*/
      
      return null;
  }
 

  //Inactive Provider
  public deleteProvider(index:number){

    return this.http.put<any[]>(this.apiProviders + `/deleted/${index}`, {}, { observe: 'response', responseType: 'text' as 'json'  });
   /* const auxDeleteProv  = this.getAllProviders();
    this.providerModelArr = auxDeleteProv.map(elem => {
      if(elem.id == index){
        elem.activo = false;
      }
      return elem;
    });
    localStorage.setItem("provider", JSON.stringify(this.providerModelArr));*/
  }


  /*getProvidersList(){
    const auxArr: string[]=[]; 
    
    this.getActiveProviders().map(elem => {
      auxArr.push(elem.razonSocial);
    });
    return auxArr;
  }*/

}

/**import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //Gracias Bill!!!!
//import { Usuario } from '../models/Usuarios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  URL_API = 'https://reqres.in/api/users';

  //import models

  datosUsuario: any = {
    id: -1,
    name: '',
    job: '',
  };

  //GET Usuarios
  public getUsers(): Observable<any> {
    console.log('HTTP GET');
    return this.http.get(this.URL_API);
  }

  //POST Usuario
  public createUser(usuario: any): Observable<any> {
    console.log('HTTP POST');
    return this.http.post(this.URL_API, usuario);
  }

  //DELETE Usuario
  public deleteUser(id: any): Observable<any> {
    return this.http.delete(this.URL_API + '/' + id);
  }

  //PUT Usuario
  public updateUser(usuario: any): Observable<any> {
    return this.http.put(this.URL_API + '/' + this.datosUsuario.id, usuario);
  }
}

--------------------------------------------------------

constructor(private http: HttpClient) { }
  API_URL = 'https://api.escuelajs.co/api/v1/';

  public getProducts(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  public getCategories(): Observable<any> {
    return this.http.get(this.API_URL + '/categories');
  }

  public getSingleProduct(id:number): Observable<any> {
    return this.http.get(this.API_URL +"/"+ id);
  }

  public getSingleCategory(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/categories/'+id);
  }

  
// COMPONENTE A <---> SERVICIO <----> SERVIDOR/BD/BACKEND
// COMPONENTE B */