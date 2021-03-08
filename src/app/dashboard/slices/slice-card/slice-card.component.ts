import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Time } from "@angular/common";

@Component({
  selector: 'app-slice-card',
  templateUrl: './slice-card.component.html',
  styleUrls: ['./slice-card.component.scss']
})
export class SliceCardComponent implements OnInit {

  @Input() id: number;
  @Input() start: Time;
  @Input() end: Time; 
  @Input() minstart: number;
  @Input() minend: number;

  @Output() btnClicked: EventEmitter<any> =new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
 
  clicked(){
    this.btnClicked.emit();
  }
}
