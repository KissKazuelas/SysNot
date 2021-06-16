import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {WindowService} from '../../../auth/services/window.service';

@Component({
  selector: 'app-add-cliente-telefono',
  templateUrl: './add-cliente-telefono.component.html',
  styleUrls: ['./add-cliente-telefono.component.css']
})
export class AddClienteTelefonoComponent implements OnInit {

  labelStatus: string = "Telefono";
  windowRef: any;
  constructor(private fireAuth:AngularFireAuth,private win: WindowService) { }
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
    if (this.labelStatus == "Telefono"){
      // ESTE METODO ENVIA EL MSJ DE TEXTO, RETORNA UNA PROMESA
      this.fireAuth.signInWithPhoneNumber(this.codigoFormulario,this.windowRef.recaptchaVerifier).then(
        // SI TODO SALIO BIEN
        (result)=>{
          this.confirmationResult=result; // ESTE OBJETO TE SIRVE PARA VERIFICAR SI ESTA BIEN EL CODIGO
        }
      ).catch(error=>{
          // SI HUBO UN ERROR
      });
      this.labelStatus="Ingrese su codigo de confirmacion";
    }else{
      // UTILIZAMOS EL CONFIRMATION RESULT PARA VERIFICAR QUE EL CODIGO QUE LE LLEGO SEA CORRECTO
      this.confirmationResult.confirm(this.codigoFormulario).then((result:any)=>{
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

}
