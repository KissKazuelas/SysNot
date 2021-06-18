import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EnlaceService } from '../../Service/enlace.service';
import {EmailForm} from '../../Interfaces/EmailForm';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  nottifyMsgs:Message[]= [];
  cabecera:string="../../../../assets/Cabecera nosotros.jpg";

  constructor(private enlace: EnlaceService) {
    this.form = new FormGroup({
      'nombre': new FormControl('',[Validators.required,Validators.minLength(3)]),
      'apellido': new FormControl('',[Validators.required,Validators.minLength(3)]),
      'asunto': new FormControl('',Validators.required),
      'correo': new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'mensaje': new FormControl('',[Validators.required,Validators.maxLength(80)]),
    });
  }

  ngOnInit(): void {
  }

  guardarCambios():void{
    console.log(this.form.value);
    const emailData:EmailForm = {
      name: this.form.value.nombre+" "+this.form.value.apellido,
      email: this.form.value.correo,
      subject: this.form.value.asunto,
      msg: this.form.value.mensaje
    }
    this.enlace.enviarEmail(emailData).subscribe((result)=>{
      this.nottifyMsgs=[{
        severity: 'info',
        summary: 'Status Correo',
        detail: 'Su email se ha enviado satisfactoriamente, en breve se comunicarán con usted'
      }];
      this.form.reset();
    },(error)=>{
      this.nottifyMsgs = [{
        severity: 'error',
        summary: 'Error al enviar email',
        detail: 'Favor de esperar unos minutos e intentar nuevamente'
      }];
    })
  }

}
