import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, SuccesAddUser, UserElement } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User>{
    return this.http.get<User>(`https://notariaapirest.herokuapp.com/api/user`);
  }
  addUser(usuario: UserElement):Observable<SuccesAddUser>{
    return this.http.post<SuccesAddUser>(`https://notariaapirest.herokuapp.com/api/user`,usuario);
  }
}

