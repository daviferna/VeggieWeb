//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppTranslateModule } from './app-translate.module';
import { AppComponent } from '../components/app.component/app.component';

//Pages
import { HomePageComponent } from '../components/home-page.component/home-page.component';
import { VeggieListPageComponent } from '../components/veggie-list-page.component/veggie-list-page.component';
import { VeggieInfoPageComponent } from '../components/veggie-info-page.component/veggie-info-page.component';
import { ContactPageComponent } from '../components/contact-page.component/contact-page.component';

//Components
import { HeaderComponent } from '../components/header.component/header.component';
import { FooterComponent } from '../components/footer.component/footer.component';

//Services
import { VeggieService } from '../services/veggie.service/veggie.service';
import { ContactService } from '../services/contact.service/contact.service';
import { HelperService } from '../services/helper.service/helper.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    VeggieListPageComponent,
    VeggieInfoPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppTranslateModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [
    VeggieService,
    ContactService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
