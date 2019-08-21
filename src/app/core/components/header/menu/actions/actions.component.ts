import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  actionsIcons: string[] = ['search', 'user', 'cart-ico'];
  constructor() {}

  ngOnInit() {}
}
