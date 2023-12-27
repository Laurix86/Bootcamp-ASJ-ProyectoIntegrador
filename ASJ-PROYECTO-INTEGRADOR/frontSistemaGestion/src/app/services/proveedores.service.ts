import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProviderModel} from '../models/providersModel'
/* import Cities from "../../../models/cities.json"
import States from "../../../models/states.json"
import Countries from "../../../models/countries.json" */
//import { Usuario } from '../models/Usuarios';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }
  providerModelArr: ProviderModel[] = [];
  oneProvider: ProviderModel= {
    code: '',
    razonSocial: '',
    rubro: '',
    sitioWeb: '',
    email: '',
    telefono: '',
    direccion: '',
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

  //Complete List
  public getAllProviders(){
      const auxListado = localStorage.getItem("provider");
      if(auxListado){
        this.providerModelArr = JSON.parse(auxListado);
      }else{
        this.providerModelArr = [];
      }
      //this.providerModelArr = JSON.parse(localStorage.getItem("provider")!) || [];
      return this.providerModelArr; 
   
  }

  // Only Active Providers List
  public getActiveProviders(){
    const auxActiveProviders = this.getAllProviders();
    if(auxActiveProviders.length <=0){
      return [];
    }else{
      console.log("auxArr",this.getAllProviders())
      this.providerModelArr = auxActiveProviders.filter(elem => elem.activo);
      return this.providerModelArr;
    }
  }

/*   public getOneProvider(index: number){
    const aux = this.getAllProviders();
     aux.filter(elem => elem.id == index)
   
  } */

  // Save new Provider
  public  saveProvider (infoProvider: ProviderModel, indexId: number){
    const auxProveedores = this.getAllProviders();
    if(indexId ==-1){
      infoProvider.id = auxProveedores.length;
      auxProveedores.push(infoProvider);
      localStorage.setItem("provider", JSON.stringify(auxProveedores));
    } else{
      this.providerModelArr = auxProveedores.map(elem => {
        if(elem.id == indexId){
          elem = infoProvider;
        }
        return elem;
      })
      
      localStorage.setItem("provider", JSON.stringify(this.providerModelArr));

    }
    
    
  }

  //Inactive Provider
  public deleteProvider(index:number){
    const auxDeleteProv  = this.getAllProviders();
    this.providerModelArr = auxDeleteProv.map(elem => {
      if(elem.id == index){
        elem.activo = false;
      }
      return elem;
    });
    localStorage.setItem("provider", JSON.stringify(this.providerModelArr));
  }


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