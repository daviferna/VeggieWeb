import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { VeggieService } from 'src/app/services/veggie.service/veggie.service';
import { CompleteVeggie } from 'src/app/types/completeVeggie';

@Component({
  selector: 'app-veggie-info-page',
  templateUrl: './veggie-info-page.component.html',
  styleUrls: ['./veggie-info-page.component.scss']
})
export class VeggieInfoPageComponent implements OnInit {

  id: number;
  veggie? : CompleteVeggie;

  constructor(
    private translateService: TranslateService, 
    private actRoute: ActivatedRoute,
    private veggieService:VeggieService) 
    {
      this.id = this.actRoute.snapshot.params.id;
    }

  ngOnInit(): void {
    this.getVeggie(this.translateService.currentLang, this.id);
    this.onLangChange(); 
  }

  getVeggie(language:string, id:number):void{
    this.veggieService.getVeggie(language, id).subscribe(
      res=>{
          this.veggie = res;      
      },
      err=>{
        alert("Error");
      }
    )
  }

  onLangChange():void{
    this.translateService.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => {
      this.getVeggie(langChangeEvent.lang, this.id);
    });
  }

}
