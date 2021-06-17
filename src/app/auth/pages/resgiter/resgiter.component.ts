
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {WindowService} from '../../../auth/services/window.service';
import { UserElement, UID } from '../../interfaces/interfaces';
import { AuthModule } from '../../auth.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resgiter',
  templateUrl: './resgiter.component.html',
  styleUrls: ['./resgiter.component.css']
})
export class ResgiterComponent implements OnInit {
  alertVisible: boolean = false;
  labelStatus: string = "Telefono";
  windowRef: any;
  constructor(private fb : FormBuilder, 
              private fireAuth:AngularFireAuth,
              private win: WindowService,
              private authService : AuthService,
              private router: Router) { }
  confirmationResult: firebase.default.auth.ConfirmationResult | any;
  codigoFormulario: string = "";
  uid:string|null = "";

  ngOnInit(): void {

    firebase.default.initializeApp({  // INICIALIZAR SERVICIO FIREBASE PARA EL CAPTCHA
      apiKey: "AIzaSyDUgq63WqudGUS1CqHfLRvEb2ogj6sV9KA",
      authDomain: "proyectonotaria.firebaseapp.com",
      projectId: "proyectonotaria",
      storageBucket: "proyectonotaria.appspot.com",
      messagingSenderId: "725211129961",
      appId: "1:725211129961:web:b2cdf14ef5cf50206e9af8",
      measurementId: "G-ES40Q9CJTD"
    });


    this.windowRef = this.win.windowRef; // REFERENCIA A EL OBJETO WINDOW
    // CREAMOS UNA INSTANCIA DE CAPTCHA EN EL OBJETO WINDOW
    this.windowRef.recaptchaVerifier = new firebase.default.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render(); // RENDERIZAMOS EL CAPTCHA

    /*this.fireAuth.user.subscribe((user)=>{      // VER ESTADO ACTUAL DEL USUARIO LOGEADO, RETORNA NULO SI NO HAY USUARIO LOGEADO
      this.uid="USUARIO LOGEADO "+user?.uid||"";
    })*/
  }

  enviarSms ():void {
        // ESTE METODO ENVIA EL MSJ DE TEXTO, RETORNA UNA PROMESA
      this.fireAuth.signInWithPhoneNumber(`+52${this.miFormulario.get('phone')?.value}`,this.windowRef.recaptchaVerifier).then(
        // SI TODO SALIO BIEN
        (result)=>{
          this.confirmationResult=result; // ESTE OBJETO TE SIRVE PARA VERIFICAR SI ESTA BIEN EL CODIGO

        }
      ).catch(error=>{
          return;
      });
      this.alertVisible = true;      
  }

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
  
  codeVerification: string ="";

  usuario: UserElement = {
    name: "",
    email: "",
    phone: "",
    role: "USER",
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

  campoEsValido( campo: string ) {
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }
  submitForm(){
    this.miFormulario.markAllAsTouched();
     if(this.miFormulario.valid){    
      this.usuario.name = this.miFormulario.get('name')?.value;
      this.usuario.email = this.miFormulario.get('email')?.value;
      this.usuario.phone = this.miFormulario.get('phone')?.value;
       console.log("succes");
       console.log(this.miFormulario.value);
       if(this.miFormulario.get('type')?.value==="email"){
         this.fireAuth.createUserWithEmailAndPassword(this.miFormulario.get('email')?.value,this.miFormulario.get('pass')?.value)
         .then(resp=>{
              this.usuario.UID= resp.user?.uid;
              this.authService.agregarUser(this.usuario)
              .subscribe(resp=>{
                      this.authService.login({UID: `${this.usuario.UID}`})
                      .subscribe(resp=>{
                        localStorage.setItem('tokenUser',resp.token)
                        this.router.navigate(['./user']);
                    })
              },error => {
                this.fireAuth.signOut().then(
                  //alert(error);
                );
              });
         });
       }else if(this.miFormulario.get('type')?.value === "phone"){
          this.enviarSms();
       }
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


  verificarCode(){
    // UTILIZAMOS EL CONFIRMATION RESULT PARA VERIFICAR QUE EL CODIGO QUE LE LLEGO SEA CORRECTO
    this.confirmationResult.confirm(this.codeVerification).then((result:any)=>{
      console.log(result);
      this.usuario.UID= result.user?.uid;
      this.authService.agregarUser(this.usuario)
        .subscribe(resp=>{
          console.log(resp);
          this.authService.login({UID: `${this.usuario.UID}`})
          .subscribe(resp=>{
            localStorage.setItem('tokenUser',resp.token)
            this.router.navigate(['./user']);
          })
      },error => {
        this.fireAuth.signOut().then(
        );
      });
      // TE RETORNA EL USUARIO QUE SE LOGEO / CREO
      // INICIA LA SESION
      // NO SOLO VAS A INICIAR LA SESION, VAS A LLAMAR A EL API DE NODE PARA RECIBIR SUS DATOS
      // Y VER SI ESTA ACTIVO, SI NO ESTA ACTIVO LO SACAS DE SESION CON
      // this.fireAuth.signOut().then()
    }).catch((error:any)=>{
      // NO ESTA BIEN EL CODIGO DEL USUARIO
      console.log("HA OCURRIDO UN ERROR AL LOGEAR");
    })
  }

  

}
