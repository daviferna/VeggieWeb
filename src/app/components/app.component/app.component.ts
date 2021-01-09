import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'veggieweb';
  
  @ViewChild("skipToContentTarget") skipToContentTarget?: ElementRef;

  @ViewChild("firstElementTarget") firstElementTarget?: ElementRef;

  constructor(private translateService: TranslateService, 
              private router:ActivatedRoute){
    translateService.setDefaultLang('en');
    translateService.use('es');

    this.router.fragment.subscribe(fragment=>{
      if(!!fragment)
        this.focusContentElement();
    });

  }

  changeLanguage(language:string):void{
    this.translateService.use(language);
  }

  isLanguageSelected(language:string):Boolean{
    return this.translateService.currentLang == language;
  }

  focusContentElement():void{
    this.skipToContentTarget?.nativeElement.focus();
  }

  clearFocus():void{
    this.firstElementTarget?.nativeElement.focus();
  }

}
