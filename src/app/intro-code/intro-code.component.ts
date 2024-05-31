import { Component } from '@angular/core';
import { io } from 'socket.io-client';
import {FormsModule, NgModel} from "@angular/forms";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-intro-code',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './intro-code.component.html',
  styleUrl: './intro-code.component.css'
})
export class IntroCodeComponent {

  codigoCorrecto: boolean | undefined;
  introCode: string|undefined

  private socket = io('http://192.168.16.131:8888', { transports : ['websocket'] });
  constructor() {
    this.socket.on('hello', (args) => {
      console.log(args);
    });
    this.socket.on('codigoCorrecto', (correcto) => {
      this.codigoCorrecto = correcto;
      console.log('Código correcto:', correcto);
    });
  }

  comprovarCode(){
    const input = document.getElementById('code') as HTMLInputElement | null;

    this.introCode= input?.value.toString().toUpperCase()

    this.socket.emit('EnviarCodiPeli', this.introCode)
  }

}
