import { Component, OnDestroy } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Subscription, interval } from 'rxjs';

import { AdvertismentsService } from '@app/shared/services/advertisments.service';
import { AdvertismentExternalService } from '@app/shared/services/advertisements-external.service';
import { IAdvertisment } from '@app/shared/interfaces/adv.interface';
import { IAdvExternal } from '@app/shared/interfaces/adv-external.interface';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss'],
})
export class AdvertisementsComponent implements OnDestroy {
  advertisementExternal: IAdvExternal[];
  isExternalAdvertisement: boolean;
  advertisments: IAdvertisment[];
  sliderInterval: Subscription;
  spinner = {
    message: 'Loading latest products',
    isError: false,
  };
  spinnerAdvExternal = {
    message: 'Loading latest products',
    isError: false,
  };
  currentIndex = 0;
  currentIndexAdvExternal = 0;
  isDataLoading = true;
  isDataLoadingAdvExternal = true;

  constructor(
    private readonly advertismentsService: AdvertismentsService,
    private readonly advExternalService: AdvertismentExternalService
  ) {
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

    this.advExternalService
      .getAdvertismentExternal()
      .pipe(delay(2000))
      .subscribe(
        data => {
          this.advertisementExternal = data;
        },
        _error => {
          this.spinnerAdvExternal = {
            message: '',
            isError: true,
          };
          this.isExternalAdvertisement = false;
          this.isDataLoadingAdvExternal = false;
        },
        () => {
          this.isExternalAdvertisement = true;
          this.isDataLoadingAdvExternal = false;
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
      if (this.currentIndex++ >= this.advertisments.length - 1) {
        this.currentIndex = 0;
      }
    });
  }
}
