import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input()
  public closeToast: EventEmitter;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {    
    }, 5000);
  }
}