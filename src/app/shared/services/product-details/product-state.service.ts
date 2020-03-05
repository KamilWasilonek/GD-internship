import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService {
  private readonly productStates = {
    gallery: false,
    description: false,
    options: false,
    addToCart: false,
  };
  private readonly isChildrenLoaded = new BehaviorSubject(false);
  currentState = this.isChildrenLoaded.asObservable();

  changeGalleryState(state: boolean): void {
    this.productStates.gallery = state;
    this.updateLoadingStatus();
  }

  changeDescriptionState(state: boolean): void {
    this.productStates.description = state;
    this.updateLoadingStatus();
  }

  changeOptionsState(state: boolean): void {
    this.productStates.options = state;
    this.updateLoadingStatus();
  }

  changeAddToCartState(state: boolean): void {
    this.productStates.addToCart = state;
    this.updateLoadingStatus();
  }

  updateLoadingStatus(): void {
    this.isChildrenLoaded.next(
      Object.values(this.productStates).every(status => {
        return status;
      })
    );
  }
}
