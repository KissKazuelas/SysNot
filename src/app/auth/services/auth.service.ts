import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, SuccesAddUser, UserElement, UID, SuccesLogin } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http: HttpClient,
               private router : Router) { }

  agregarUser(user: UserElement):Observable<any>{
    return this.http.post<any>(`https://notariaapirest.herokuapp.com/api/user`,user);
  }
  login(uid: UID):Observable<SuccesLogin>{
    return this.http.post<SuccesLogin>(`https://notariaapirest.herokuapp.com/auth/login`,uid);
  }

 


}
