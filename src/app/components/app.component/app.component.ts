import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common'
import { HelperService } from 'src/app/services/helper.service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'veggieweb';

  constructor(private helperService:HelperService) {
    this.helperService.setDefaultLanguage('en');
    this.helperService.changeLanguage('es');    
  }

  changeLanguage(language:string):void{
    this.helperService.changeLanguage(language); 
  }

  isLanguageSelected(language:string):Boolean{
    return this.helperService.getCurrentLang() == language;
  }

}
