
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserElement } from 'src/app/admin/interfaces/interfaces';

@Component({
  selector: 'app-resgiter',
  templateUrl: './resgiter.component.html',
  styleUrls: ['./resgiter.component.css']
})
export class ResgiterComponent implements OnInit {

  
  miFormulario: FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.min(0),Validators.email]],
    phone:[ '',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
    pass:[ '',[Validators.required, Validators.minLength(6)]],
    pass1:[ '',[Validators.required]],
    type: ['phone',Validators.required]
  },{
    validators: [this.camposIguales('pass','pass1')]
  }
  
  )
    
  phone: boolean = true;

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
      return 'El telefono debe contener solo números';
    }else if(errors?.minlength || errors?.maxlenght){
      return 'Número debe contener 10 dígitos: LADA + Num.';
    }
    return '';
  }

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
      this.miFormulario.get('type')?.valueChanges
      .subscribe(resp => {
        if(resp==="phone"){
          this.phone=true;
        }else{
          this.phone=false;
        }
      });
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
     }else{
       console.log('no succes');
       console.log(this.miFormulario);
     }
  }
  camposIguales( campo1: string, campo2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if ( pass1 !== pass2 ) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      } 

      formGroup.get(campo2)?.setErrors(null);

      return null
    }

  }

}
