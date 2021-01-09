import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  onClearFocus: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clearFocus():void{
    this.onClearFocus.emit('clear');
  }

}
