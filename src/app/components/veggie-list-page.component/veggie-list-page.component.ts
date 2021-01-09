import { Component, NgZone, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/services/helper.service/helper.service';
import { VeggieService } from 'src/app/services/veggie.service/veggie.service';
import { Veggie } from 'src/app/types/veggie';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-veggie-list-page',
  templateUrl: './veggie-list-page.component.html',
  styleUrls: ['./veggie-list-page.component.scss']
})
export class VeggieListPageComponent implements OnInit {

  veggies: Veggie[] = [];

  constructor(
    private zone:NgZone,
    private translateService: TranslateService, 
    private veggieService:VeggieService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.getVeggies(this.translateService.currentLang);
    this.onLangChange();
    this.translateService.get('veggieListPage.tabTitle').subscribe((translated: string) => {
      this.titleService.setTitle(translated);
    })
  }

  getVeggies(language:string):void{
    this.veggieService.getVeggies(language).subscribe(
      res=>{
        this.zone.run(()=>{
          this.veggies = res;
        });       
      },
      err=>{
        alert("Error");
      }
    )
  }

  onLangChange():void{
    this.translateService.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      this.getVeggies(langChangeEvent.lang);
    });
  }

}
