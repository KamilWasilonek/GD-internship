import { Component, OnDestroy } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Subscription, interval } from 'rxjs';

import { AdvertisementsService } from '@app/shared/services/advertisements.service';
import { IAdvertisement } from '@app/shared/interfaces/adv.interface';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss'],
})
export class AdvertisementsComponent implements OnDestroy {
  advertisements: IAdvertisement[];
  sliderInterval: Subscription;
  spinner = {
    message: 'Loading latest products',
    isError: false,
  };
  currentIndex = 0;
  isDataLoading = true;

  constructor(private readonly advertisementsService: AdvertisementsService) {
    this.advertisementsService
      .getAdvertisments()
      .pipe(delay(2000))
      .subscribe(
        advertisements => {
          this.advertisements = advertisements;
          console.log(this.advertisements);
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

  ngOnDestroy(): void {
    if (this.sliderInterval !== undefined) {
      this.sliderInterval.unsubscribe();
    }
  }

  public startSliderInterval(): void {
    this.sliderInterval = interval(5000).subscribe(() => {
      if (this.currentIndex++ >= this.advertisements.length - 1) {
        this.currentIndex = 0;
      }
    });
  }
}
