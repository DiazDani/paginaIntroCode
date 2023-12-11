// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IntroCodeComponent } from './intro-code/intro-code.component';  // ¡Agrega esta línea!

@NgModule({
    declarations: [
        AppComponent,
        IntroCodeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
