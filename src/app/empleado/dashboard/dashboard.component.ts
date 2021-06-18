import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {TramiteInterface} from '../Interfaces/tramite.interface';
import {Tramite} from '../../admin/interfaces/interfaces';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tramites: TramiteInterface[] = [];
  tramiteSeleccionado: TramiteInterface[] = [];
  displayUpdateDialog: boolean = false;
  tramiteActual?: TramiteInterface;

  estadoTramite: boolean = false;
  ultimoMovimiento: string = "";

  constructor(private empleadoService: UserService,private fireAuth:AngularFireAuth) { }

  ngOnInit(): void {
    this.updateArrayWithService();
  }

  updateArrayWithService():void{
    this.empleadoService.getTramites().subscribe((result)=>{
      this.fireAuth.user.subscribe((user)=>{
        this.tramites = [];
        console.log(user?.uid);
        result.forEach(result=>{
          if (user?.uid==result.data.abogadoUID){
            this.tramites.push(result);
          }
        });
      })
    }, (error)=>{
      console.log(error);
    });
  }

  actualizarDatos(tramite: TramiteInterface):void{
    this.estadoTramite=tramite.data.status;
    this.ultimoMovimiento=tramite.data.ultimoMovimiento;
    this.displayUpdateDialog = true;
    this.tramiteActual = tramite;
  }

  accionActualiza (): void{
    this.empleadoService.updateTramite(this.tramiteActual?.id||"",this.estadoTramite,this.ultimoMovimiento)
      .subscribe((response)=>{
        this.updateArrayWithService();
        this.displayUpdateDialog=false;
      },(error)=>{
        console.log(error);
      })
  }
}
