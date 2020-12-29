import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppTranslateModule } from './app-translate.module';
import { AppComponent } from '../components/app.component/app.component';


//Components
import {HeaderComponent} from '../components/header.component/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
