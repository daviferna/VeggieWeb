import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(language:string):void{
    this.translateService.use(language);
  }

  isLanguageSelected(language:string):Boolean{
    return this.translateService.currentLang == language;
  }

}
