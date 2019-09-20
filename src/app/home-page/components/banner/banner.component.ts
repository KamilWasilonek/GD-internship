import { ISlide } from '@app/shared/interfaces/banner.interface';
import { Component, OnDestroy, SecurityContext } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { SliderService } from '@app/shared/services/slider.service';

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
  sliderHttpObserver: Subscription;
  sliderInterval: Subscription;
  spinner = {
    message: 'Loading latest articles',
    isError: false,
  };

  title: string;
  proposition: string;
  description: string;
  price: string;

  constructor(private readonly sliderService: SliderService, private readonly sanitizer: DomSanitizer) {
    this.sliderHttpObserver = this.sliderService.getSlideshow().subscribe(
      slideshow => {
        this.slides = slideshow;
      },
      _error => {
        this.spinner = {
          message: 'Can not load latest products',
          isError: true,
        };
      },
      () => {
        this.currentSlideIndex = 0;
        this.backgroundImage = this.sanitizeImage(this.slides[this.currentSlideIndex].img);
        this.startSliderInterval();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
    if (this.sliderHttpObserver !== undefined) {
      this.sliderHttpObserver.unsubscribe();
    }
  }

  public showNextSlide(event?: MouseEvent): void {
    if (event !== undefined && this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
    if (this.currentSlideIndex++ >= this.slides.length - 1) {
      this.currentSlideIndex = 0;
    }
    this.backgroundImage = this.sanitizeImage(this.slides[this.currentSlideIndex].img);
  }

  public showPrevSlide(event?: MouseEvent): void {
    if (event !== undefined && this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
    if (this.currentSlideIndex-- === 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }
    this.backgroundImage = this.sanitizeImage(this.slides[this.currentSlideIndex].img);
  }

  startSliderInterval(): void {
    this.sliderInterval = interval(5000).subscribe(() => {
      this.showNextSlide();
    });
  }

  public makeOrder(): void {
    console.log('Ordered');
  }

  public setSlideContent(index: number): void {
    this.title = this.slides[index].title;
    this.proposition = this.slides[index].proposition;
    this.description = this.slides[index].description;
    this.price = this.slides[index].price;
    this.isDataLoading = false;
  }

  public sanitizeImage(url: string): string {
    return this.sanitizer.sanitize(SecurityContext.URL, url);
  }
}
