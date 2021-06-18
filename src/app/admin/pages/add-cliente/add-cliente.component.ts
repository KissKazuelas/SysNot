import {Message,MessageService} from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteInterface } from '../../interfaces/interfaces';
import { AdminServiceService } from '../../services/admin-service.service';
import { of, pipe } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  msgs1: Message[] = [];
  verMensaje : boolean = false;


  constructor(
    private fb : FormBuilder,
    private adminService : AdminServiceService,
    private router: Router
  ) { }

  miFormulario : FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    tipo: ['', [Validators.required]],
    telefono: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10)]]
  })

  cliente: ClienteInterface = {
    nombre: "",
    tipo: "",
    telefono: "",
  }
  ngOnInit(): void {

  }
  get nameErrorMsg() :string{
    const errors = this.miFormulario.get('nombre')?.errors;
    if(errors?.required){
      return 'Nombre obligatorio';
    }else if(errors?.minlength){
      return 'Nombre demasiado corto';
    }
    return '';
  }
  get phoneErrorMsg() :string{
    const errors = this.miFormulario.get('telefono')?.errors;
    if(errors?.required){
      return 'Telefono obligatorio';
    }else if( errors?.pattern){
      return 'El telefono debe contener solo números';
    }else if(errors?.minlength || errors?.maxlenght){
      return 'Número debe contener 10 dígitos: LADA + Num.';
    }
    return '';
  }

  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  setNotError(){}

  submitForm(){
    this.miFormulario.markAllAsTouched();
    if(this.miFormulario.valid){    
      this.cliente = this.miFormulario.value;
      this.adminService.addCliente(this.cliente)
      .pipe(
        tap( val => {
          this.msgs1 = [
          {severity:'success', summary:'Success', detail:'Cliente creado con exito'},];
          this.verMensaje = true;
        }),
        catchError((asa) =>  of('Operacion no  exitosa') ),
        delay(2000)
      )
      .subscribe(resp=>{
        this.router.navigate(['./admin']);
      });
    }
  }
  

}
