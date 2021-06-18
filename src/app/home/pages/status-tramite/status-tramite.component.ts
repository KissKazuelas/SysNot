import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QrService } from './qr.service';
import { Tramite, TramiteStatus, User } from '../../../admin/interfaces/interfaces';
import { AdminServiceService } from 'src/app/admin/services/admin-service.service';

@Component({
  selector: 'app-status-tramite',
  templateUrl: './status-tramite.component.html',
  styleUrls: ['./status-tramite.component.css']
})
export class StatusTramiteComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute,
              private qrService : QrService,
              private adminService : AdminServiceService) { }

    id: string ="";
    tramite!: TramiteStatus;

    abogados!: User; 
    
  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params) => {
        this.qrService.obtenerTramite(params.id)
        .subscribe(resp =>{
            this.tramite = resp;
        });
      }
    );
    this.getUsers();
  }

  getUsers(){
    this.adminService.getUsers()
    .subscribe(resp=> { 
      this.abogados = resp;
    });
  }
  getAbodadoPorId(uid : string):string{
    if(this.abogados){
      for(let i of this.abogados.users){
        if(i.UID === uid){
          return i.name;
        }
      }
      return "";
    }
    return "";
  }



}
