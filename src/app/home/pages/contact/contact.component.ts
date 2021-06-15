import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EnlaceService } from '../../Service/enlace.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
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
  }

}
