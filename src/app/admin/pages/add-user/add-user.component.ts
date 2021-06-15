import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserElement } from '../../interfaces/interfaces';
import { AdminServiceService } from '../../services/admin-service.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.min(0),Validators.email]],
    phone:[ '',[Validators.required, Validators.minLength(7), Validators.pattern("^[0-9]*$")]],
    role: ['USER',Validators.required]
  })
    


  usuario: UserElement = {
    name: "",
    email: "",
    phone: "",
    role: ""
  };

  get emailErrorMsg() :string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'Email obligatorio';
    }else if( errors?.email){
      return 'Valor ingresado no tiene formato de correo';
    }
    return '';
  }
  get phoneErrorMsg() :string{
    const errors = this.miFormulario.get('phone')?.errors;
    if(errors?.required){
      return 'Telefono obligatorio';
    }else if( errors?.pattern){
      return 'El telefono debe ser contener solo números';
    }else if(errors?.minlength){
      return 'Telefono demasiado corto';
    }
    return '';
  }

  msgs1!: Message[];
  constructor(private fb : FormBuilder,
              private adminServices : AdminServiceService) { }

  ngOnInit(): void {
      
  }
  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }
  submitForm(){
    this.miFormulario.markAllAsTouched();
     if(this.miFormulario.valid){
       console.log("succes");
       console.log(this.miFormulario.value);
       this.usuario=this.miFormulario.value;
       console.log(this.usuario); 
       this.adminServices.addUser(this.usuario)
       .subscribe(resp=>{
        this.msgs1 = [
          {severity:'success', summary:'Success', detail:'Usuario Creado con exito'},
      ];
       });
       this.miFormulario.reset();
     }else{
       console.log('no succes');
       console.log(this.miFormulario);
     }
  }

}
