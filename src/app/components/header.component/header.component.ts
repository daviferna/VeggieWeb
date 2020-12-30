import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(language:string):void{
    this.translateService.use(language);
  }
}
