import { Component, OnDestroy } from '@angular/core';
import { AdvService } from '@app/shared/services/adv.service';
import { Advertisment } from '@app/shared/interfaces/adv.interface';
import { delay } from 'rxjs/operators';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss'],
})
export class AdvertisementsComponent implements OnDestroy {
  advertisments: Advertisment[];
  sliderInterval: Subscription;
  spinner = {
    message: 'Loading latest products',
    isError: false,
  };
  currentIndex = 0;
  isDataLoading = true;

  constructor(private advService: AdvService) {
    this.advService
      .getAdv()
      .pipe(delay(2000))
      .subscribe(
        advItem => {
          this.advertisments = advItem;
        },
        error => {
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

  ngOnDestroy() {
    if (this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
  }

  public startSliderInterval() {
    this.sliderInterval = interval(5000).subscribe(() => {
      if (this.currentIndex++ >= this.advertisments.length - 1) {
        this.currentIndex = 0;
      }
    });
  }
}
