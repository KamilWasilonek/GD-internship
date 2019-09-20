import { Component, OnDestroy } from '@angular/core';
import { IAdvertisment } from '@app/shared/interfaces/adv.interface';
import { delay } from 'rxjs/operators';
import { Subscription, interval } from 'rxjs';
import { AdvertismentsService } from '@app/shared/services/advertisments.service';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss'],
})
export class AdvertisementsComponent implements OnDestroy {
  advertisments: IAdvertisment[];
  sliderInterval: Subscription;
  spinner = {
    message: 'Loading latest products',
    isError: false,
  };
  currentIndex = 0;
  isDataLoading = true;

  constructor(private readonly advertismentsService: AdvertismentsService) {
    this.advertismentsService
      .getAdvertisments()
      .pipe(delay(2000))
      .subscribe(
        advertisments => {
          this.advertisments = advertisments;
        },
        _error => {
          this.spinner = {
            message: 'Can not load latest products',
            isError: true,
          };
        },
        () => {
          this.isDataLoading = false;
          this.startSliderInterval();
        }
      );
  }

  ngOnDestroy():void {
    if (this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
  }

  public startSliderInterval():void {
    this.sliderInterval = interval(5000).subscribe(() => {
      if (this.currentIndex++ >= this.advertisments.length - 1) {
        this.currentIndex = 0;
      }
    });
  }
}
