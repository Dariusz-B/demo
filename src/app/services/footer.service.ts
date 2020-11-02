import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { envVariables } from 'src/environments/env-variables';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  getFooter() { 
    return this.http.get(`${envVariables.api}/footer/getfooter?lang=pl`);
  }

  
}


