import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { User, SuccesAddUser, UserElement, UID, SuccesLogin, Rol } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string | null = "";


  constructor(private http: HttpClient,
               private router : Router) { }

  agregarUser(user: UserElement):Observable<any>{
    return this.http.post<any>(`https://notariaapirest.herokuapp.com/api/user`,user);
  }
  login(uid: UID):Observable<SuccesLogin>{
    return this.http.post<SuccesLogin>(`https://notariaapirest.herokuapp.com/auth/login`,uid);
  }


  getRole(rol: string):Observable <boolean>{


  

    if(!localStorage.getItem('tokenUser')){
      return of(false);
    }else{
      this.token = localStorage.getItem('tokenUser'); 
     let headers = new HttpHeaders();
    headers = headers.append('authToken' ,this.token || "");
    return this.http.get<Rol>(`https://notariaapirest.herokuapp.com/auth/role`, {headers: headers})
    .pipe(
      map( rolResp => {
        if((rolResp.role===rol)){
          return true;
        }else{
          return false;
        }
      }),
      catchError(_ => of(false))
      
    );
  }
 
  
}
getToken(){

}
}
