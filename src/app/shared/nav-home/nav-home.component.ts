import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  speech= new SpeechSynthesisUtterance();
  status:boolean=true;
  @Input()texto:string[]=[];
  aux:string='';
  x:number=0
  
  constructor() { }

  ngOnInit() {
  }

  reproducir(){
    if(this.texto.length > 0){      
      speechSynthesis.cancel();
      this.speech.volume = 1;
      this.speech.rate = 1;
      this.speech.pitch = 1;
      this.speech.lang = 'es';
      this.speech.text=this.texto[0];
      speechSynthesis.speak(this.speech);
      this.speech.text=this.texto[1];
      speechSynthesis.speak(this.speech);
    }else{
      return;
    }

  }

  pausar(){
    //this.x=1;
    speechSynthesis.pause();
  }

  detener(){
    speechSynthesis.cancel();
  }

  resumen(){
    speechSynthesis.resume();
  }
  }
