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
              label: 'Usuarios',
              icon: 'pi pi-users',
              items: [{
                      label: 'Nuevo', 
                      icon: 'pi pi-user-plus',
                      routerLink: 'agregarUsuario',
                      },
                      {
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
            label: 'Asuntos',
            icon: 'pi pi-book',
            items: [
              {
                label:"Nuevo",
                icon: "pi pi-plus-circle",
              },
              {
                label: "Agregar Tipo de Asunto:",
                icon: "pi pi-plus-circle"
              }
            ]
          }
      ];
  }

}
