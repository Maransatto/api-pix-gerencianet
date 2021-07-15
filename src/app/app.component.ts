import { Component, OnInit } from '@angular/core';
import { ApiGerencianetService } from './api-gerencianet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  authError: string;

  constructor(
    private apiGerecianetService: ApiGerencianetService
  ) {}

  get autenticado(): boolean {
    return localStorage.getItem('pixUserData') !== null;
  }

  ngOnInit(): void {
    
  }

  autenticar(): void {
    this.apiGerecianetService.oAuth().toPromise()
      .then(result => localStorage.setItem('pixUserData', JSON.stringify(result)))
      .catch(error => this.authError = JSON.stringify(error));
  }

}
