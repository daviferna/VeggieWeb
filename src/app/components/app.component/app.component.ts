import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
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

  previousUrl:string ="";

  constructor(private activateRoute:ActivatedRoute, private router :Router, private helperService:HelperService) {
    this.helperService.setDefaultLanguage('en');
    this.helperService.changeLanguage('es');  

    this.activateRoute.fragment.subscribe(fragment=>{
      if(!!fragment){
        this.focusContentElement();
      }
    });

    this.router.events.subscribe(event=>{

      if(event instanceof NavigationEnd){
        if(this.previousUrl !== "" && event.url !== this.previousUrl+"#content"){
          this.clearFocus();
        }
        this.previousUrl = event.url;
      }
    })

    this.helperService.onClearFocus.subscribe((targ:any)=>{
      this.clearFocus();
    })

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
    this.firstElementTarget?.nativeElement.focus();
  }

}
