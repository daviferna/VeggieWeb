import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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
  
  @ViewChild("skipToContentTarget") skipToContentTarget?: ElementRef;
  @ViewChild("firstElementTarget") firstElementTarget?: ElementRef;

  constructor(private router:ActivatedRoute, private helperService:HelperService) {
    this.helperService.setDefaultLanguage('en');
    this.helperService.changeLanguage('es');  

    this.router.fragment.subscribe(fragment=>{
      if(!!fragment)
        this.focusContentElement();
    });

  }

  changeLanguage(language:string):void{
    this.helperService.changeLanguage(language); 
  }

  isLanguageSelected(language:string):Boolean{
    return this.helperService.getCurrentLang() == language;
  }

  focusContentElement():void{
    this.skipToContentTarget?.nativeElement.focus();
  }

  clearFocus():void{
    console.log("adsf");
    this.firstElementTarget?.nativeElement.focus();
  }

}
