import { Component, OnInit } from '@angular/core';
import { faShare, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action-icons',
  templateUrl: './action-icons.component.html',
  styleUrls: ['./action-icons.component.scss'],
})
export class ActionIconsComponent implements OnInit {
  shareIcon = faShare;
  shoppingIcon = faShoppingCart;
  heartIcon = faHeart;

  constructor() {}

  ngOnInit() {}
}
