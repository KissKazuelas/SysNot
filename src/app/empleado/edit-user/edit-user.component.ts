import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserUpdate } from '../../admin/interfaces/interfaces';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  msgs1: Message[] = [];
  verMensaje : boolean = false;

  constructor(private fb: FormBuilder,
              private fireAuth:AngularFireAuth,
              private userService : UserService) { }

  miFormulario: FormGroup = this.fb.group({
    name: ['',Validators.required],
    uid:  [''],
    phone:[ '',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
  })

  ngOnInit(): void {
    this.verificarSesion();
  }
  get phoneErrorMsg() :string{
    const errors = this.miFormulario.get('phone')?.errors;
    if(errors?.required){
      return 'Telefono obligatorio';
    }else if( errors?.pattern){
      return 'El telefono debe contener solo números';
    }else if(errors?.minlength || errors?.maxlenght){
      return 'Número debe contener 10 dígitos: LADA + Num.';
    }
    return '';
  }

  user: UserUpdate = {
    name: "",
    phone: "",
    UID: ""
  };
  submitForm(){
    if(this.miFormulario.valid){
      this.userService.updateUser(this.user)
      .subscribe(resp =>{
        this.msgs1 = [
          {severity:'success', summary:'Success', detail:`Usuario ${this.user.name} ha sido actualizado con exito`},];
          this.verMensaje = true;  
      });
    }
  }
  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
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
                this.setForm();
                break;
              }
          }  
      })
    })
  }
  setForm(){
    this.miFormulario.reset({
      name: this.user.name,
      phone: this.user.phone
    }); 
  }

}
