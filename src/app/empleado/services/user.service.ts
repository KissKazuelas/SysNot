import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {TramiteInterface} from '../Interfaces/tramite.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'https://notariaapirest.herokuapp.com/api/notaria/tramite';

  constructor(private httpService: HttpClient) { }

  getTramites ():Observable<TramiteInterface[]>{

    const token = localStorage.getItem('tokenUser');
    let headers = new HttpHeaders();
    headers = headers.append('authToken' ,token || "");
    return this.httpService.get<TramiteInterface[]>(this.endpoint,{
      headers: headers
    });
  }

  updateTramite(idTramite: string, status:boolean, ultimoMovimiento:string):Observable<any>{
    const token = localStorage.getItem('tokenUser');
    let headers = new HttpHeaders();
    headers = headers.append('authToken' ,token || "");
    return this.httpService.put<TramiteInterface[]>(this.endpoint,{
      idTramite,
      status,
      ultimoMovimiento
    },{
      headers: headers
    });
  }
}
