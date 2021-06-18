import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/interfaces';
import { AdminServiceService } from '../../services/admin-service.service';
import { UserElement, Tramite, ClienteApi } from '../../interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UID } from '../../../auth/interfaces/interfaces';
import { Message } from 'primeng/api';
import { of, pipe } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tramite',
  templateUrl: './add-tramite.component.html',
  styleUrls: ['./add-tramite.component.css']
})
export class AddTramiteComponent implements OnInit {

  usuarios!: UserElement[];
  userSelect !: UserElement[]; 

  clientes!: ClienteApi[];
  clientSelect !: ClienteApi[];

  tramite: Tramite = {
    nombreTramite: "string",
    idCliente: "string",
    UIDAbogado: "string",
  }; 

  msgs1: Message[] = [];
  verMensaje : boolean = false;


  constructor(private adminService : AdminServiceService,
              private fb : FormBuilder,
              private router: Router) { }
miFormulario : FormGroup = this.fb.group({
    nombreTramite: ['',[Validators.required]],
    idCliente:  [,[Validators.required, Validators.maxLength(1)]],
    UIDAbogado: [, [Validators.required, Validators.maxLength(1)]],
  })
  ngOnInit(): void {
    this.getUsers();
    this.getClients();
  }
  getUsers(){
    this.adminService.getUsers()
    .subscribe(resp => {
      this.usuarios = resp.users
      console.log(this.usuarios);
    });
  }
  getClients(){
    this.adminService.getClientes()
      .subscribe(clientes=>{
        this.clientes = clientes;
      }
    )
  }
  verfificar(){
    console.log(this.userSelect);
    console.log(this.clientSelect);
  }
  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }
  get encargadoMsgError(){
    const errors = this.miFormulario.get('UIDAbogado')?.errors;
    if(errors?.required){
      return 'Debe seleccionar un encargado';
    }else if(errors?.maxlength){
      return 'No puede selccionar mas de un encargado';
    }
    return '';
  }
  get eclienteMsgError(){
    const errors = this.miFormulario.get('idCliente')?.errors;
    if(errors?.required){
      return 'Debe seleccionar un cliente';
    }else if(errors?.maxlength){
      return 'No puede selccionar mas de un cliente';
    }
    return '';
  }

  submitForm(){
    this.miFormulario.markAllAsTouched();
    if(this.miFormulario.valid){    
      this.tramite.UIDAbogado= this.userSelect[0].UID;
      this.tramite.idCliente= this.clientSelect[0].id;
      this.tramite.nombreTramite= this.miFormulario.get('nombreTramite')?.value;
     this.adminService.addTramite(this.tramite)
      .pipe(
        tap( val => {
          this.msgs1 = [
          {severity:'success', summary:'Success', detail:'Tramite creado con exito'},];
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
