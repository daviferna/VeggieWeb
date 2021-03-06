import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private translateService:TranslateService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.translateService.get('homePage.tabTitle').subscribe((translated: string) => {
      this.titleService.setTitle(translated);
    })
  }



}
