import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Usuario } from '../models/Usuarios';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }
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