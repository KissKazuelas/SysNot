import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UserElement, UID } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import { WindowService } from '../../services/window.service';

import * as firebase from 'firebase';
import { AuthModule } from '../../auth.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //FIREBASE
  windowRef: any;
  confirmationResult: firebase.default.auth.ConfirmationResult | any;
  codigoFormulario: string = "";
  uid:string|null = "";
  
  alertVisible: boolean = false;
  constructor(private fb : FormBuilder, 
    private fireAuth:AngularFireAuth,
    private win: WindowService,
    private authService : AuthService,
    private router: Router) { }
  
  typeAuth: string = 'phone'
      
  codeVerification: string ="";

  ngOnInit(): void {
    this.miFormulario.get('type')?.valueChanges
    .subscribe(resp=> this.typeAuth=resp);

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
      miFormulario: FormGroup = this.fb.group({
        email:[''],
        phone:[ ''],
        pass:[ ''],
        type: ['phone',Validators.required]
      })
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
    console.log(this.miFormulario.valid);
    if(this.miFormulario.valid){    
      if(this.typeAuth  === 'email'){
          this.fireAuth.signInWithEmailAndPassword(this.miFormulario.get('email')?.value, this.miFormulario.get('pass')?.value)
          .then(fbResp=>{
            this.authService.login({UID: `${fbResp.user?.uid}`})
            .subscribe(
              authResp =>{
                localStorage.setItem('tokenUser',authResp.token);
                this.fireAuth.user.subscribe(console.log)
                this.router.navigate(['./user']);
              }
            )
          }
          )
      } else if(this.typeAuth === 'phone'){
          this.enviarSms();
      }else{
        console.log('nosucces');
      }
    }
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
verificarCode(){
  // UTILIZAMOS EL CONFIRMATION RESULT PARA VERIFICAR QUE EL CODIGO QUE LE LLEGO SEA CORRECTO
  this.confirmationResult.confirm(this.codeVerification).then((result:any)=>{
    console.log(result);
    this.usuario.UID= result.user?.uid;
    this.authService.login({UID: `${this.usuario.UID}`})
        .subscribe(resp=>{
          localStorage.setItem('tokenUser',resp.token);
          this.fireAuth.user.subscribe(console.log);
          this.router.navigate(['./user']);
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
