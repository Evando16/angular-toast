import { Component, OnInit, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    // the trigger name does not matter, but it must match the name used in the [@...] attribute in the template.
    trigger('fadeAndSlideAnimation', [

      // this defines the "resting" styles for the "visible" state (slide in)
      state('visible', style({
        opacity: 0.9,
        transition: '1s', // time to show (slide in)
        right: '2%'
      })),

      // this defines the "resting" styles for the "hidden" state. (slide-out)
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(50%)'
      })),

      // transition from "any state" to "visible" states using an animation
      transition('* => visible', animate('300ms ease-in')),

      // transition from "visible" to "hidden" similarly
      transition('visible => hidden', animate('1000ms ease-out'))

    ]),

  ]
})
export class ToastComponent implements OnInit {
  public toasty: string = 'hidden';

  constructor() { }

  ngOnInit(): void {
    this.toasty = 'visible';

    setTimeout(() => {
      this.toasty = 'hidden';
    }, 5000);
  }

  public closeToast(): void {
    this.toasty = 'hidden';
  }
}