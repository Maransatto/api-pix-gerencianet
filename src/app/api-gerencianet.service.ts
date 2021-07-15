import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiGerencianetService {

  API_URL = 'https://api-pix.gerencianet.com.br';

  constructor(
    private http: HttpClient
  ) { }

  public oAuth() {
    const body = { "grant_type": "client_credentials" }
    const certificado = 
    const options = {
      headers: new HttpHeaders({
        'Accept': '*/*',
        'Content-Type' : 'application/json',
        'Authorization' : 'Basic ' + btoa(`${environment.username}:${environment.password}`)
      })
    };
    return this.http.post(`${this.API_URL}/oauth/token`, body, options)
  }
}
