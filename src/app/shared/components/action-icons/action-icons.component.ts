import { Component, Input } from '@angular/core';
import { faShare, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CardListService } from '@app/shared/services/card-list/card-list.service';
import { ICardItem } from '@app/shared/interfaces/card-item.interface';
import { CardStatusService } from '@app/shared/services/card-list/card-status.service';

@Component({
  selector: 'app-action-icons',
  templateUrl: './action-icons.component.html',
  styleUrls: ['./action-icons.component.scss'],
})
export class ActionIconsComponent {
  shareIcon = faShare;
  shoppingIcon = faShoppingCart;
  heartIcon = faHeart;
  @Input() cardItem: ICardItem;

  constructor(private readonly cardService: CardListService, private readonly cardStatusService: CardStatusService) {}

  addToCard(): void {
    if (!this.cardItem.size) {
      alert('Select size');
    } else if (!this.cardItem.color) {
      alert('Select color');
    } else {
      this.cardService.addToCardList(this.cardItem);
      this.cardStatusService.updateStatus();
    }
  }
}
