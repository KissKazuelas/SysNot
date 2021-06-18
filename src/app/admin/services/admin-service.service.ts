import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, SuccesAddUser, UserElement, DeleteStatus, ClienteInterface, SuccesAddClient, ClienteApi, TramitesApi } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService{



  token: string | null = "";


  constructor(private http: HttpClient) { }

  getUsers():Observable<User>{
    this.token = localStorage.getItem('tokenUser'); 
    let headers = new HttpHeaders();
    headers = headers.append('authToken' ,this.token || "");
    return this.http.get<User>(`https://notariaapirest.herokuapp.com/api/user`,{headers: headers});
  }
  addUser(usuario: UserElement):Observable<SuccesAddUser>{
    
    return this.http.post<SuccesAddUser>(`https://notariaapirest.herokuapp.com/api/user`,usuario);
  }

  deleteUser(uid : string){
    this.token = localStorage.getItem('tokenUser'); 
     const httpOptions = {
      headers: new HttpHeaders({ 'authToken': this.token || "" }), body: {"UID" : uid}
  };
  
    return this.http.delete('https://notariaapirest.herokuapp.com/api/user',httpOptions);
  }


  addCliente(cliente : ClienteInterface):Observable <SuccesAddClient>{
    this.token = localStorage.getItem('tokenUser'); 
   
    let headers: HttpHeaders = new HttpHeaders({
      'authToken': this.token || ""});

  let options = { headers: headers };
    return this.http.post<SuccesAddClient>('https://notariaapirest.herokuapp.com/api/user/cliente',cliente,options);
  }
  getClientes():Observable <ClienteApi[]>{
    this.token = localStorage.getItem('tokenUser'); 
   
    let headers: HttpHeaders = new HttpHeaders({
      'authToken': this.token || ""});
      return this.http.get<ClienteApi[]>('https://notariaapirest.herokuapp.com/api/user/cliente',{headers: headers});
  }
  addTramite(tramite : any):Observable <any>{
    this.token = localStorage.getItem('tokenUser'); 
   
    let headers: HttpHeaders = new HttpHeaders({
      'authToken': this.token || ""});

  let options = { headers: headers };
    return this.http.post<any>('https://notariaapirest.herokuapp.com/api/notaria/tramite',tramite,options);
  }


  getTramites(): Observable <TramitesApi[]>{
    this.token = localStorage.getItem('tokenUser'); 
   
    let headers: HttpHeaders = new HttpHeaders({
      'authToken': this.token || ""});
    return this.http.get<TramitesApi[]>(`https://notariaapirest.herokuapp.com/api/notaria/tramite`,{headers: headers});
  }


}

///api/notaria/tramite

