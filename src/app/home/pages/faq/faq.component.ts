import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  text:string[]=[];
  aux:string='';
  aux2:string='';
  enviar:string[]=[];

  constructor() { 
    
  }

  ngOnInit(): void {
    this.text[0]='PREGUNTAS FRECUENTES.';
    this.text[1]=' Hemos hecho un listado de preguntas frecuentes que realizan nuestros clientes. Si a pesar de ello aun no tuviera respuesta a su pregunta y sus dudas continúan puede llamarnos o escribirnos a través de nuestra sección de contacto.'
    this.text[2]=' ¿Qué es un notario?.'
    this.text[3]=' El notario es un profesional del Derecho, investido de fe pública por el Estado, que brinda seguridad jurídica y certeza en los actos y hechos de los que da fe, manteniendo siempre un alto nivel de profesionalismo, una total imparcialidad con los prestatarios del servicio y una plena autonomía en sus decisiones, las cuales sólo tienen por límite el marco jurídico y el estado de Derecho.'
    this.text[4]=' El notario ejerce su función con independencia del poder público y los particulares, teniendo a su cargo interpretar la voluntad de las partes y plasmar ésta en un instrumento público y auténtico, redactado bajo su responsabilidad y que puede ser una escritura pública, si se trata de dar fe de un acto jurídico, como por ejemplo un contrato; o bien una acta notarial, si se certifica un hecho jurídico o material, como por ejemplo una notificación.'
    this.text[5]=' ¿Qué es una escritura y qué un acta notarial?.'
    this.text[6]=' La escritura notarial es el documento original, redactado y autorizado por el notario, en el que este hace constar actos jurídicos, tales como testamentos, poderes, adjudicación de bienes por herencia, y contratos como compraventas, donaciones, constitución de sociedades, etc., que requieren de esa formalidad, asegurándose en cada caso de que se cumpla con todos los requisitos legales para que surtan los efectos deseados por quienes los otorgan, brindándoles con ello seguridad jurídica.'
    this.text[7]=' Acta notarial es el documento que redacta y autoriza el notario, en el que hace constar hechos presenciados por él o que le consten, tales como ratificaciones de firmas, constancias de hechos, notificaciones, etc., brindando de la misma forma certeza y seguridad jurídica.'
    this.text[8]=' ¿Qué otras actividades puede realizar un notario?.'
    this.text[9]=' El notario está dedicado al servicio del bien y la paz de la ciudad, al respeto y cumplimiento del Derecho y es también un auxiliar de la administración de justicia. Por ello, además de los oficios notariales, el notario puede desempeñar actividades que no causen conflicto o dependencia con la dación de fe y con su imparcialidad, tales como.'
    this.text[10]=' Cargos académicos, docentes y de dirección de instituciones académicas, de beneficencia pública o privada, o de colaboración ciudadana. Cargos gratuitos en toda clase de asociaciones, sociedades o instituciones, cuyos fines no sean lucrativos. Cargos de tutor, curador o albacea. Cargos de secretario de sociedades o asociaciones. También puede ser árbitro, secretario arbitral, mediador jurídico y conciliador. El notario puede intervenir, patrocinar y representar a los interesados en procedimientos judiciales, en los que no haya contienda o en trámites y procedimientos administrativos.'
    this.text[11]=' ¿Qué es un testamento público abierto y para qué sirve?.'
    this.text[12]=' El testamento público abierto es un medio seguro y eficaz que permite al interesado disponer libremente de los bienes y derechos que tenga, para que la propiedad y titularidad de los mismos se transmita a las personas que el propio interesado designe y que serán sus herederos. El testamento es un acto que se otorga en voz alta ante Notario y en el que ya no se requiere de testigos, salvo que así lo pidan el testador o el Notario o bien en los casos de alguna incapacidad del testador.'
    this.text[13]=' El testador debe manifestarle al Notario cual es su voluntad, es decir a quien o a quienes quiere que pasen sus bienes cuando muera; el Notario, después de escucharlo y aconsejarlo, redactará el testamento en una escritura, le dará lectura en voz alta ante el testador y enseguida será firmado; con éste sencillo procedimiento quedará otorgado su testamento sin necesidad de hacer otro trámite ni de firmar ningún otro documento.'
    this.text[14]=' ¿Cuánto cuesta el testamento ante Notario?.'
    this.text[15]=' El testamento, contra lo que mucha gente piensa, tiene un costo sumamente bajo, sobre todo si se le compara con los gastos de un juicio intestado.'
    for(let i=0;i<8;i++){
      this.aux += this.text[i];
    }

    for(let i=8;i<16;i++){
      this.aux2 += this.text[i];
    }

    this.enviar[0]=this.aux;
    this.enviar[1]=this.aux2;

    console.log(this.aux);
    console.log(this.aux2);
  }

}
