import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-cancel-btn-group',
  templateUrl: './confirm-cancel-btn-group.component.html',
  styleUrls: ['./confirm-cancel-btn-group.component.css']
})
export class ConfirmCancelBtnGroupComponent implements OnInit {

  @Input()
  confirmBtnEnabled = true
  @Output()
  buttonClick = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(action: string) {
    
    this.buttonClick.emit(action)
  }
}
