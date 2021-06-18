import { Component, OnInit } from '@angular/core';
import { TramitesApi } from '../../interfaces/interfaces';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {


  tramites : TramitesApi[] = [];

  tramitesActivos = 0;
  tramitesTerminados = 0;

  data: any;
    
    constructor(private authService : AdminServiceService) {
      
  }
  ngOnInit(): void {
    
    this.authService.getTramites()
    .subscribe(
      resp => {
        this.tramitesActivos = resp.filter( tramite => tramite.data.status === true).length
        this.tramitesTerminados = resp.length - this.tramitesActivos;
        this.generarInfo();
      }
    )
  }
  generarInfo(){
    this.data = {
      labels: ['Trámites concluidos','Trámites en proceso'],
      datasets: [
          {
              data: [this.tramitesTerminados, this.tramitesActivos],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      }
  }

}
