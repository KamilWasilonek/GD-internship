import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Renderer2 } from '@angular/core';
import { actionSvg } from '../../../../../../assets/config/actions-svg.js';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ActionsComponent implements OnInit {
  @ViewChild('search', { static: true }) search: ElementRef;
  @ViewChild('user', { static: true }) user: ElementRef;
  @ViewChild('card', { static: true }) card: ElementRef;

  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    for (const key in actionSvg) {
      if (actionSvg.hasOwnProperty(key)) {
        this.renderer.setProperty(this[key].nativeElement, 'innerHTML', actionSvg[key].svg);
      }
    }
  }

  searchOnClick() {
    console.log('search icon active');
  }

  userOnClick() {
    console.log('user icon active');
  }

  cardOnClick() {
    console.log('card icon active');
  }
}
