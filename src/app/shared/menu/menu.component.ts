import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { AdminServiceService } from '../../admin/services/admin-service.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private fireAuth:AngularFireAuth,
              private router : Router,
              private adminService: AdminServiceService) { }
  items!: MenuItem[];

  ngOnInit() {
    this.verificarSesion();
      this.items = [
        {
          label:'Inicio',
          icon: 'pi pi-home',
          routerLink:'dashboard'
        },
          {
              label: 'Usuarios',
              icon: 'pi pi-users',
              items: [{
                        label: 'Ver Ususarios',
                        icon: 'pi pi-search',
                        routerLink: 'listadoUsuarios',
                      },
              ]
          },
          {
              label: 'Clientes',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                    label: 'Nuevo', 
                    icon: 'pi pi-user-plus',
                    routerLink: 'agregarCliente',
                  },
                  {
                    label: 'Ver clientes', 
                    icon: 'pi pi-search',
                    routerLink: 'listadoClientes',
                  }
              ]
          },
          {
            label: 'Trámites',
            icon: 'pi pi-book',
            items: [
              {
                label:"Nuevo",
                icon: "pi pi-plus-circle",
                routerLink: 'agregarTramite'
              },
            ]
          },
          {
            label:'Estadisticas',
            icon: 'pi pi-chart-bar',
            routerLink:'estadisticas'
          },
      ];
  }

  logout(){
    this.fireAuth.signOut().then(
      () =>{ 
       localStorage.removeItem('tokenUser'); 
       this.router.navigate(['./home']);
     }
    )
   }
   async verificarSesion(){
    await this.adminService.getUsers()
    .subscribe(users => {
      this.fireAuth.user.subscribe( resp => {
          for(let user of users.users){
              if(user.UID === resp?.uid){
                this.items.unshift(
                  {
                    label: `Admin - ${user.name}`,
                    icon: 'pi pi-user',
                  }
                )  
                break;
              }
          }  
      })
    })
  }
}
