import { Component, OnDestroy, OnInit } from '@angular/core';

import { takeUntil, tap } from 'rxjs/operators';
import { interval, Subscription, Subject, Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromSlider from '../../store/slider';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnDestroy, OnInit {
  isImagesLoading = true;
  animationOption = 'opacity';
  imageNumberToLoad: number;
  currentSlideIndex = 0;
  unsubscribe$ = new Subject<void>();
  sliderInterval: Subscription;

  spinner = {
    message: 'Loading latest articles',
    isError: false,
  };

  sliderState$: Observable<fromSlider.SliderState>;

  slidesAmount: number;

  constructor(private readonly store: Store<fromStore.HomePageState>) {}

  ngOnInit(): void {
    this.sliderState$ = this.store.pipe(
      select(fromSlider.selectState),
      tap(sliderSate => {
        if (sliderSate.isFailed) {
          this.spinner = {
            message: 'Can not load latest products',
            isError: true,
          };
        } else if (sliderSate.data.length) {
          this.slidesAmount = this.imageNumberToLoad = sliderSate.data.length;
        }
      })
    );

    this.store.dispatch(new fromSlider.LoadSliderAction());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  showNextSlide(event?: MouseEvent): void {
    this.checkEvent(event);
    if (this.currentSlideIndex++ >= this.slidesAmount - 1) {
      this.currentSlideIndex = 0;
    }
  }

  showPrevSlide(event?: MouseEvent): void {
    this.checkEvent(event);
    if (this.currentSlideIndex-- === 0) {
      this.currentSlideIndex = this.slidesAmount - 1;
    }
  }

  startSliderInterval(): void {
    this.sliderInterval = interval(5000)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.showNextSlide();
      });
  }

  imageLoaded(): void {
    this.imageNumberToLoad--;
    if (this.imageNumberToLoad === 0) {
      this.isImagesLoading = false;
      this.startSliderInterval();
    }
  }

  checkEvent(event: MouseEvent): void {
    if (event !== undefined && this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
  }
}
