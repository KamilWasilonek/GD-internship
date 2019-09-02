import { Component, OnInit, OnDestroy } from '@angular/core';
import { Slide } from '@app/shared/interfaces/banner.interface';
import { interval, Subscription } from 'rxjs';
import { LatestProductsService } from '@app/shared/services/latest-products.service';
import { DomSanitizer } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnDestroy {
  isDataLoading = true;
  slides: Slide[];
  currentSlideIndex: number;
  backgroundImage: string;
  sliderInterval: Subscription;
  spinner = {
    message: 'Loading latest articles',
    isError: false,
  };

  constructor(private latestProductsService: LatestProductsService, private sanitizer: DomSanitizer) {
    this.latestProductsService
      .getSlides()
      .pipe(delay(3000))
      .subscribe(
        slidesItems => {
          this.slides = slidesItems;
        },
        error => {
          this.spinner = {
            message: 'Can not load latest products',
            isError: true,
          };
        },
        () => {
          this.currentSlideIndex = 0;
          this.backgroundImage = this.slides[this.currentSlideIndex].img;
          this.isDataLoading = false;
          this.startSliderInterval();
        }
      );
  }

  ngOnDestroy() {
    if (this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
  }

  public showNextSlide(event?: MouseEvent) {
    if (event !== undefined && this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
    if (this.currentSlideIndex++ >= this.slides.length - 1) {
      this.currentSlideIndex = 0;
    }
    this.backgroundImage = this.slides[this.currentSlideIndex].img;
  }

  public showPrevSlide(event?: MouseEvent) {
    if (event !== undefined && this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
    if (this.currentSlideIndex-- === 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }
    this.backgroundImage = this.slides[this.currentSlideIndex].img;
  }

  startSliderInterval() {
    this.sliderInterval = interval(5000).subscribe(() => {
      this.showNextSlide();
    });
  }

  public makeOrder() {
    console.log('Ordered');
  }

  public sanitizeImage(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
