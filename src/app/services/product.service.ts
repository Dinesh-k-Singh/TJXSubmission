import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dropdown, Product } from '../Data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(CountryCode:string){
    return this.http.get<Product[]>('https://localhost:7142/api/Product/GetProducts?CountryCode='+CountryCode);
  }
  getCountry(){
    return this.http.get<string[]>('https://localhost:7142/api/Product/GetCountry'); 
  }
}
