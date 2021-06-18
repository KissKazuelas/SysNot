import { Component, OnInit } from '@angular/core';
import { ClienteApi } from '../../interfaces/interfaces';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes !: ClienteApi[];

  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.getClientes();
  }
  getClientes(){
    this.adminService.getClientes()
    .subscribe(resp =>{
      this.clientes = resp;
      console.log(this.clientes);
    })
  }

}
