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
  
  constructor() { }

  ngOnInit() {
    console.log(this.texto);
  }

  reproducir(){
    speechSynthesis.cancel();
    console.log(this.texto);
    for(let i=0;i<16;){
      console.log(i);
      this.speech.text=this.texto[i];
      this.speech.volume = 1;
      this.speech.rate = 1;
      this.speech.pitch = 1;
      this.speech.lang = 'es';
      speechSynthesis.speak(this.speech);
      i+1;
    }
    /*this.speech.text=this.texto;
    this.speech.volume = 1;
    this.speech.rate = 1;
    this.speech.pitch = 1;
    this.speech.lang = 'es';
    speechSynthesis.speak(this.speech);*/
  }

  pausar(){
    speechSynthesis.pause();
  }

  detener(){
    speechSynthesis.cancel();
  }

  resumen(){
    speechSynthesis.resume();
  }
}
