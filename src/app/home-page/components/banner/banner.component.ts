import { Component, OnDestroy, OnInit } from '@angular/core';

import { takeUntil, tap } from 'rxjs/operators';
import { interval, Subscription, Subject, Observable } from 'rxjs';

import { ISlide } from '@app/shared/interfaces/banner.interface';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';
import { SliderState } from '@app/home-page/store/reducers/slider.reducer';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnDestroy, OnInit {
  isImagesLoading = true;
  animationOption = 'opacity';
  imageNumberToLoad: number;
  slides: ISlide[];
  currentSlideIndex = 0;
  unsubscribe$ = new Subject<void>();
  sliderInterval: Subscription;

  spinner = {
    message: 'Loading latest articles',
    isError: false,
  };

  slider$: Observable<SliderState>;

  constructor(private readonly store: Store<fromStore.HomePageState>) {}

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadSliderAction());

    this.slider$ = this.store.pipe(
      select(fromStore.getSliderState),
      tap(slider => {
        if (slider.isError) {
          this.spinner = {
            message: 'Can not load latest products',
            isError: true,
          };
        } else if (slider.isLoaded) {
          this.slides = slider.data;
          this.imageNumberToLoad = this.slides.length;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  showNextSlide(event?: MouseEvent): void {
    this.checkEvent(event);
    if (this.currentSlideIndex++ >= this.slides.length - 1) {
      this.currentSlideIndex = 0;
    }
  }

  showPrevSlide(event?: MouseEvent): void {
    this.checkEvent(event);
    if (this.currentSlideIndex-- === 0) {
      this.currentSlideIndex = this.slides.length - 1;
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
