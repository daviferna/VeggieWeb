import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'veggieweb';

  constructor(private translateService: TranslateService, @Inject(DOCUMENT) private document: Document) {
    translateService.setDefaultLang('en');
    translateService.use('es');
    this.document.documentElement.lang = this.translateService.currentLang;
  }

  changeLanguage(language:string):void{
    this.translateService.use(language);
    this.document.documentElement.lang = language;
  }

  isLanguageSelected(language:string):Boolean{
    return this.translateService.currentLang == language;
  }

}
