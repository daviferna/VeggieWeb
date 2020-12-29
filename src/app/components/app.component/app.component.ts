import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'veggieweb';

  public contentPath:string ='';

  constructor(private router: Router, private translateService: TranslateService){
    translateService.setDefaultLang('en');
    translateService.use('es');

    router.events.subscribe(event=>{
      if(event instanceof NavigationEnd)
        this.contentPath = event.url;
    });
  }
}
