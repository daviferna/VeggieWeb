import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service/helper.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
  }

  clearFocus():void{
    this.helperService.clearFocus();
  }

}
