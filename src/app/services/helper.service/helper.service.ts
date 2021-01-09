import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(@Inject(DOCUMENT) private document: Document, private translateService: TranslateService) {}

  setDefaultLanguage(language:string):void{
    this.translateService.setDefaultLang(language);
  }

  changeLanguage(language:string):void{
    this.translateService.use(language)
    this.document.documentElement.lang = this.translateService.currentLang;
  }

  getCurrentLang():string{
    return this.translateService.currentLang;
  }



}
