import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent {
  searchIcon = faSearch;
  userIcon = faUser;
  cardIcon = faShoppingBasket;
  constructor(private readonly router: Router) {}

  searchOnClick(): void {
    // tslint:disable: no-floating-promises
    this.router.navigate(['/']);
    console.log('search icon active');
  }

  userOnClick(): void {
    this.router.navigate(['/']);
    console.log('user icon active');
  }

  cardOnClick(): void {
    this.router.navigate(['/']);
    console.log('card icon active');
  }
  // tslint:enable: no-floating-promises
}
