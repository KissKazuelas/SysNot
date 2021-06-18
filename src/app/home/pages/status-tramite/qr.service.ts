import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TramiteStatus } from '../../../admin/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private http: HttpClient) { }

  obtenerTramite(id:string): Observable <TramiteStatus>{
    return this.http.get<TramiteStatus>('https://notariaapirest.herokuapp.com/api/notaria/tramite/'+id);
  }
}
