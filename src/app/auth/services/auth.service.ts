import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, SuccesAddUser, UserElement, UID, SuccesLogin } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http: HttpClient) { }

  agregarUser(user: UserElement):Observable<any>{
    return this.http.post<any>(`https://notariaapirest.herokuapp.com/api/user`,user);
  }
  login(uid: UID):Observable<SuccesLogin>{
    return this.http.post<SuccesLogin>(`https://notariaapirest.herokuapp.com/auth/login`,uid);
  }
}
