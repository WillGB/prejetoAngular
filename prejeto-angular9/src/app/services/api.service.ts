import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  caminho = 'http://localhost/crudangular9/';
  constructor(private http: HttpClient) { }

  Api(dados: any, api: string) {
    const httpOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = this.caminho + api;
    return this.http.post(url, JSON.stringify(dados), httpOption).map(res=> res);
  }
}
