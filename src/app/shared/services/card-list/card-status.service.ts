import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardStatusService {
  private readonly isAddedToCardList = new Subject<string>();

  public getCard(): Observable<string> {
    return this.isAddedToCardList.asObservable();
  }

  public updateStatus(id: string): void {
    this.isAddedToCardList.next(id);
  }
}
