import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';
import { TramitesApi, User, UserElement } from '../../interfaces/interfaces';
import { UID } from '../../../auth/interfaces/interfaces';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private adminService : AdminServiceService) { }

  activos:boolean =false;

  tramites!: TramitesApi[];

  
  abogado: string ="";
  
  abogados!: User; 
  
  displayQr: boolean= false;
  
  ngOnInit(): void {
    
    this.adminService.getTramites()
    .subscribe(respTramites => {
      this.tramites = respTramites;
    })
    
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
  
  //QRCODE
  getValue(id :string){
    return "https://proyectonotaria.web.app/statusTramite/" +  id; 
  }
  elementType= NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  idTramiteQr: string = "";
  showQr(id : string){
    this.idTramiteQr= id;
    this.displayQr = true;
  }

}
  
