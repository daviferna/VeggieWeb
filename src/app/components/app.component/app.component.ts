import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'veggieweb';

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

}
