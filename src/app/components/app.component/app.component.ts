import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'veggieweb';
  
  @ViewChild("skipToContentAnchor") skipToContentLink?: ElementRef;

  constructor(private translateService: TranslateService){
    translateService.setDefaultLang('en');
    translateService.use('es');
  }

  changeLanguage(language:string):void{
    this.translateService.use(language);
  }

  isLanguageSelected(language:string):Boolean{
    return this.translateService.currentLang == language;
  }

  focusContentElement():void{
    this.skipToContentLink?.nativeElement.focus();
  }

}
