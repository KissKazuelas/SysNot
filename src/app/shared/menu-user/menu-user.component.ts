import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  constructor( private fireAuth:AngularFireAuth,
                private router : Router) { }
  items!: MenuItem[];
  logout(){
   this.fireAuth.signOut().then(
     () =>{ 
      localStorage.removeItem('tokenUser'); 
      this.router.navigate(['./home']);
    }
   )
  }

  verificarSesion(){

    this.fireAuth.user.subscribe(console.log)
  }

  ngOnInit() {
      this.items = [
          {
            label: 'Asuntos',
            icon: 'pi pi-book',
            items: [
              {
                label:"Nuevo",
                icon: "pi pi-plus-circle",
              },
            ]
          }
      ];
  }

}
