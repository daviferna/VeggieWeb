import { Component, NgZone, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { VeggieService } from 'src/app/services/veggie.service/veggie.service';
import { VeggieItem } from 'src/app/types/veggieItem';

@Component({
  selector: 'app-veggie-list-page',
  templateUrl: './veggie-list-page.component.html',
  styleUrls: ['./veggie-list-page.component.scss']
})
export class VeggieListPageComponent implements OnInit {

  veggies: VeggieItem[] = [];

  constructor(
    private zone:NgZone,
    private translateService: TranslateService, 
    private veggieService:VeggieService) { }

  ngOnInit(): void {
    this.getVeggies('es');
    this.onLangChange(); 
  }

  getVeggies(language:string):void{
    console.log(language);
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
