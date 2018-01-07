import { BrowserModule } from '@angular/platform-browser';
import {CountDown} from "../../node_modules/angular2-simple-countdown/countdown";
import { NgModule } from '@angular/core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CountDown
  ],
  imports: [
    Ng2PageScrollModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
