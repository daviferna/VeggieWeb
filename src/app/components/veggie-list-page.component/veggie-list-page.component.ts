import { Component, NgZone, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/app/services/helper.service/helper.service';
import { VeggieService } from 'src/app/services/veggie.service/veggie.service';
import { Veggie } from 'src/app/types/veggie';

@Component({
  selector: 'app-veggie-list-page',
  templateUrl: './veggie-list-page.component.html',
  styleUrls: ['./veggie-list-page.component.scss']
})
export class VeggieListPageComponent implements OnInit {

  veggies: Veggie[] = [];

  constructor(
    private zone:NgZone,
    private helperService: HelperService,
    private translateService: TranslateService, 
    private veggieService:VeggieService) { }

  ngOnInit(): void {
    this.getVeggies(this.translateService.currentLang);
    this.onLangChange(); 
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

  clearFocus():void{
    this.helperService.clearFocus();
  }
}
