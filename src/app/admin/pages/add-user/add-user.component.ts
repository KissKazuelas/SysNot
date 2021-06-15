import { Component, OnInit } from '@angular/core';
import { UserElement } from '../../interfaces/interfaces';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  roles!: any[];

  usuario!: UserElement;

  constructor() { }

  ngOnInit(): void {
      this.roles = [
        {
          role:"USER"
        },
        {
          role:"ADMIN"
        }
      ]
  }

}
