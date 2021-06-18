import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {TramiteInterface} from '../Interfaces/tramite.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/auth/interfaces/interfaces';
import { UserUpdate } from '../../admin/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = "";

  endpoint = 'https://notariaapirest.herokuapp.com/api/notaria/tramite';

  constructor(private httpService: HttpClient) { }

  getUsers():Observable<User>{
    this.token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOiJzajN3anBpaElLVEw5SFBOWXZudXRLdWpMbFUyIiwiaWF0IjoxNjI0MDM0MzYzLCJleHAiOjE2MjQwNDUxNjN9.8CV_GOBFKOPIMAJ2A0qLatr-feYOQbrQfpW_b4Jmvns"; 
    let headers = new HttpHeaders();
    headers = headers.append('authToken' ,this.token || "");
    return this.httpService.get<User>(`https://notariaapirest.herokuapp.com/api/user`,{headers: headers});
  }

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

  updateUser(user: UserUpdate): Observable<any>{
    this.token = localStorage.getItem('tokenUser') || "";
    let headers = new HttpHeaders();
    headers = headers.append('authToken' ,this.token || "");
    return this.httpService.put<User>(`https://notariaapirest.herokuapp.com/api/user`,user,{headers: headers});
  }
}
