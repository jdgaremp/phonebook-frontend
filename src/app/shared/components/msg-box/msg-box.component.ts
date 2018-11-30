import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent implements OnInit {

  @Input()
  message
  @Input()
  title
  @Input()
  colorClass

  constructor() {}

  ngOnInit() {
  }
}