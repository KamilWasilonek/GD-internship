import { Component, OnDestroy, SecurityContext } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { interval, Subscription, Subject } from 'rxjs';

import { ISlide } from '@app/shared/interfaces/banner.interface';
import { SliderService } from '@app/shared/services/slider.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnDestroy {
  isDataLoading = true;
  animationOption = 'opacity';
  imageNumberToLoad: number;
  slides: ISlide[];
  currentSlideIndex: number;
  unsubscribe$ = new Subject<void>();
  sliderInterval: Subscription;

  spinner = {
    message: 'Loading latest articles',
    isError: false,
  };

  constructor(private readonly sliderService: SliderService, private readonly sanitizer: DomSanitizer) {
    this.sliderService
      .getSlideshow()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        slideshow => {
          this.slides = slideshow;
          this.slides.forEach((val, index) => {
            this.slides[index].img = this.sanitizer.sanitize(SecurityContext.URL, val.img);
          });
        },
        _error => {
          this.spinner = {
            message: 'Can not load latest products',
            isError: true,
          };
        },
        () => {
          this.currentSlideIndex = 0;
          this.imageNumberToLoad = this.slides.length;
        }
      );
  }

  ngOnDestroy(): void {
    if (this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
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
    this.sliderInterval = interval(5000).subscribe(() => {
      this.showNextSlide();
    });
  }

  imageLoaded(): void {
    this.imageNumberToLoad--;
    if (this.imageNumberToLoad === 0) {
      this.isDataLoading = false;
      this.startSliderInterval();
    }
  }

  checkEvent(event: MouseEvent): void {
    if (event !== undefined && this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
  }
}
