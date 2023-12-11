import { Component } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-intro-code',
  templateUrl: './intro-code.component.html',
  styleUrls: ['./intro-code.component.css'],
})
export class IntroCodeComponent {

  codigoCorrecto: boolean | undefined;
  introCode: string | undefined;

  private socket = io('http://localhost:3080', { transports: ['websocket'] });

  constructor() {
    this.socket.on('hello', (args) => {
      console.log(args);
    });

    this.socket.on('codigoCorrecto', (correcto) => {
      this.codigoCorrecto = correcto;
      console.log('Código correcto:', correcto);
    });
  }

  comprobarCode() {
    this.socket.emit('EnviarCodiPeli', this.introCode);
  }
}
