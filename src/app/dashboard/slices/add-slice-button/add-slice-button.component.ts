import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-slice-button',
  templateUrl: './add-slice-button.component.html',
  styleUrls: ['./add-slice-button.component.scss']
})
export class AddSliceButtonComponent implements OnInit {

  @Output() btnClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goToForm(){
    this.btnClicked.emit("clicked");
  }


}
