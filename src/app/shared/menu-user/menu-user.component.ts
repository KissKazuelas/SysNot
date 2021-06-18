import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../admin/services/admin-service.service';
import { UserService } from '../../empleado/services/user.service';
import { UserElement } from '../../admin/interfaces/interfaces';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  constructor( private fireAuth:AngularFireAuth,
                private router : Router,
                private userService : UserService) { }
  items!: MenuItem[];
  user = {
    name: "",
    phone: "",
    UID: ""
  };
  logout(){
   this.fireAuth.signOut().then(
     () =>{ 
      localStorage.removeItem('tokenUser'); 
      this.router.navigate(['./home']);
    }
   )
  }
 

  async verificarSesion(){
    await this.userService.getUsers()
    .subscribe(users => {
      this.fireAuth.user.subscribe( resp => {
          for(let user of users.users){
              if(user.UID === resp?.uid){
                this.user.UID = user.UID || " ";
                this.user.name = user.name;
                this.user.phone = user.phone;
                break;
              }
          }  
          this.items = [
                {
                  label: `Mi cuenta - ${this.user.name}`,
                  icon: 'pi pi-user',
                  items: [
                    {
                      label:"Inicio",
                      icon: "pi pi-home",
                      routerLink: './dashboard'
                    },
                    {
                      label:"Editar",
                      icon: "pi pi-user-edit",
                      routerLink: './editUser'
                    },
                  ]
                }
            ];
      })
    })
  }
        //   

  ngOnInit() {
    this.verificarSesion();
      this.userService.getUsers()
      .subscribe(console.log)
      
  }

}
