import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  searchIcon = faSearch;
  userIcon = faUser;
  cardIcon = faShoppingBasket;
  constructor(private router: Router) {}
  ngOnInit() {}

  searchOnClick() {
    this.router.navigate(['/']);
    console.log('search icon active');
  }

  userOnClick() {
    this.router.navigate(['/']);
    console.log('user icon active');
  }

  cardOnClick() {
    this.router.navigate(['/']);
    console.log('card icon active');
  }
}
