import { Component, OnDestroy } from '@angular/core';
import { ISlide } from '@app/shared/interfaces/banner.interface';
import { interval, Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';
import { HomepageService } from '@app/shared/services/homepage.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnDestroy {
  isDataLoading = true;
  slides: ISlide[];
  currentSlideIndex: number;
  backgroundImage: string;
  sliderInterval: Subscription;
  spinner = {
    message: 'Loading latest articles',
    isError: false,
  };

  constructor(private homepageService: HomepageService, private sanitizer: DomSanitizer) {
    this.homepageService
      .getHompageData()
      .pipe(delay(3000))
      .subscribe(
        homepageData => {
          this.slides = homepageData.slideshow;
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
