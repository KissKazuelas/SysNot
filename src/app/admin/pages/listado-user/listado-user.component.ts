import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';
import { User } from '../../interfaces/interfaces';

@Component({
  selector: 'app-listado-user',
  templateUrl: './listado-user.component.html',
  styleUrls: ['./listado-user.component.css']
})
export class ListadoUserComponent implements OnInit {

  usuarios!: User;

  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
    this.getUsers();
    this.cols = [
      { field: 'name', header: 'Nombre:' },
      { field: 'email', header: 'Email:' },
      { field: 'phone', header: 'Telefono:' },
      { field: 'enable', header: 'Activo:'}
  ];
  }

  cols: any = [];
  getUsers(){
    this.adminService.getUsers()
    .subscribe(resp=> { console.log(resp); 
      this.usuarios = resp});
  }

  borrarUser(uid :string){
    this.adminService.deleteUser(uid)
    .subscribe(resp => {this.getUsers()});
  }

}
