import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service/helper.service';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private helperService:HelperService) { }

  ngOnInit(): void {
  }

  changeLanguage(language:string):void{
    this.helperService.changeLanguage(language); 
  }

  isLanguageSelected(language:string):Boolean{
    return this.helperService.getCurrentLang() == language;
  }

}
