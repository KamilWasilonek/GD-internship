import { Injectable } from '@angular/core';
import { ICardItem } from '../../interfaces/card-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CardListService {
  private readonly cardList: ICardItem[];

  constructor() {
    this.cardList = [];
  }

  addToCardList(cardItem: ICardItem): void {
    const cardCopy = { ...cardItem };
    this.cardList.push(cardCopy);
    console.log(this.cardList);
  }
}
