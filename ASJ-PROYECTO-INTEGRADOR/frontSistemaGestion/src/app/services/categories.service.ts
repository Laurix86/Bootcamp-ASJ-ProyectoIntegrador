import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesModel } from '../models/productsModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }


  private apiCategories = 'http://localhost:8080/categories';

  public getAllCategories(): Observable<CategoriesModel[]>{
    return this.http.get<CategoriesModel[]>(this.apiCategories);
  }

  public getActiveCategories(): Observable<CategoriesModel[]>{
    return this.http.get<CategoriesModel[]>(this.apiCategories+`/active-categories`);
  }
}
