import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EmailForm} from '../Interfaces/EmailForm';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnlaceService {

  constructor(private httpService:HttpClient) { }

  enviarEmail (emailData:EmailForm): Observable<Object>{
    const headers = { 'content-type': 'application/json'}
    return this.httpService.post("https://notariaapirest.herokuapp.com/api/notaria/emailReceiver", JSON.stringify(emailData),{'headers':headers});
  }

  leer(){

  }
}
