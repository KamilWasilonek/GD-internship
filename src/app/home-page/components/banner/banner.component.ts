import { Component, OnInit, HostListener } from '@angular/core';
import { BannerService } from '@app/home-page/services/banner.service';
import { Slide } from '@app/shared/interfaces/banner.interface';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  slides: Slide[];
  currentSlideIndex: number;
  backgroundImage: string;
  sliderInterval: Subscription;

  constructor(private bannerService: BannerService) {
    this.bannerService.getSlides().subscribe(slidesItems => {
      this.slides = slidesItems;
      this.currentSlideIndex = 0;
      this.backgroundImage = this.slides[this.currentSlideIndex].img;
      this.startSliderInterval();
    });
  }

  ngOnInit() {}

  @HostListener('keypress', ['$event']) onKeyDown(event) {
    console.log('component is clicked');
    console.log(event);
  }

  public showNextSlide() {
    if (this.currentSlideIndex++ >= this.slides.length - 1) {
      this.currentSlideIndex = 0;
    }
    this.backgroundImage = this.slides[this.currentSlideIndex].img;
  }

  public showPrevSlide() {
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
}
