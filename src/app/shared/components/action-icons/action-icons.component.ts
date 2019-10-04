import { Component, Input } from '@angular/core';
import { faShare, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import { CardListService } from '@app/shared/services/card-list/card-list.service';
import { CardStatusService } from '@app/shared/services/card-list/card-status.service';
import { ICardItem } from '@app/shared/interfaces/card-item.interface';
import * as fromStore from '@app/@store';
import * as fromWishList from '@app/@store/wish-list';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';

@Component({
  selector: 'app-action-icons',
  templateUrl: './action-icons.component.html',
  styleUrls: ['./action-icons.component.scss'],
})
export class ActionIconsComponent {
  @Input() cardItem: ICardItem;
  @Input() product: IArrivals;
  shareIcon = faShare;
  shoppingIcon = faShoppingCart;
  heartIcon = faHeart;

  constructor(
    private readonly cardService: CardListService,
    private readonly cardStatusService: CardStatusService,
    private readonly store: Store<fromStore.AppState>
  ) {}

  addToCard(): void {
    if (!this.cardItem.size) {
      alert('Select size');
    } else if (!this.cardItem.color) {
      alert('Select color');
    } else {
      this.cardService.addToCardList(this.cardItem);
      this.cardStatusService.updateStatus(this.cardItem.id);
    }
  }

  addToWishList(): void {
    this.store.dispatch(new fromWishList.AddToWishListAction(this.product));
  }
}
