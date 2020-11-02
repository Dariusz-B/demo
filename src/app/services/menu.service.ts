import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { envVariables } from 'src/environments/env-variables';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu() { 
    return this.http.get(`${envVariables.api}/product_categories/gethierarchy?lang=pl`)
  }
  
}


