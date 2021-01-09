import { Component, NgZone, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HomeService } from 'src/app/services/home.service/home.service';
import { HomeData } from 'src/app/types/homeData';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  homeData:HomeData[] = [];

  constructor(
    private zone:NgZone,
    private translateService:TranslateService,
    private homeService:HomeService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getHomeData(this.translateService.currentLang);
    this.onLangChange();
    this.translateService.get('homePage.tabTitle').subscribe((translated: string) => {
      this.titleService.setTitle(translated);
    })
  }

  getHomeData(language:string):void{
    this.homeService.getHomeData(language).subscribe(
      res=>{
        this.zone.run(()=>{
          this.homeData = res;
        });       
      },
      err=>{
        alert("Error");
      }
    )
  }

  onLangChange():void{
    this.translateService.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      this.getHomeData(langChangeEvent.lang);
    });
  }

}
