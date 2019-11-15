import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = "https://economia.awesomeapi.com.br/json/all"
  constructor( private http : HttpClient ) { }

  listar() : Observable<any> {
    return this.http.get(this.url)
  }
}
