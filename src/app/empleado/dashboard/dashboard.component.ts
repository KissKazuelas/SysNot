import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {TramiteInterface} from '../Interfaces/tramite.interface';
import {Tramite} from '../../admin/interfaces/interfaces';

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

  constructor(private empleadoService: UserService) { }

  ngOnInit(): void {
    this.updateArrayWithService();
  }

  updateArrayWithService():void{
    this.empleadoService.getTramites().subscribe((result)=>{
      this.tramites = [];
      result.forEach(result=>{
        this.tramites.push(result);
      });
    }, (error)=>{
      console.log(error);
    });
  }

  actualizarDatos(tramite: TramiteInterface):void{
    console.log(tramite);
    this.estadoTramite=tramite.data.status;
    this.ultimoMovimiento=tramite.data.ultimoMovimiento;
    this.displayUpdateDialog = true;
    this.tramiteActual = tramite;
  }

  accionActualiza (): void{
    this.empleadoService.updateTramite(this.tramiteActual?.id||"",this.estadoTramite,this.ultimoMovimiento)
      .subscribe((response)=>{
        console.log(this.tramiteActual?.id||"");
        this.updateArrayWithService();
        this.displayUpdateDialog=false;
      },(error)=>{
        console.log(error);
      })
  }
}
