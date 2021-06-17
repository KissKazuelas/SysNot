import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  constructor( private fireAuth:AngularFireAuth) { }
  items!: MenuItem[];
  logout(){
    console.log(this.fireAuth.user);
    this.fireAuth.signOut().then(console.log);
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
