import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class WishListEffects {
  constructor(private readonly action$: Actions) {}
}
