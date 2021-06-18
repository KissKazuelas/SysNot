import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  items!: MenuItem[];

  ngOnInit() {
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

}
