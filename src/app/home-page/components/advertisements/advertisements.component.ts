import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, takeUntil } from 'rxjs/operators';
import { Subscription, interval, Subject } from 'rxjs';

import { AdvertismentsService } from '@app/shared/services/advertisments.service';
import { AdvertismentExternalService } from '@app/shared/services/advertisements-external.service';
import { IAdvExternal } from '@app/shared/interfaces/adv-external.interface';
import { IAdvInternal } from '@app/shared/interfaces/adv-internal.interface';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss'],
})
export class AdvertisementsComponent implements OnInit, OnDestroy {
  advertisementsExternal: IAdvExternal[];
  advertisments: IAdvInternal[];
  sliderInterval: Subscription[] = [];
  spinners = [
    {
      message: 'Loading latest products',
      isError: false,
    },
    { message: 'Loading recommended products', isError: false },
  ];
  currentIndex: number[] = [0, 0];
  isDataLoading: boolean[] = [true, true];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly advertismentsService: AdvertismentsService,
    private readonly advExternalService: AdvertismentExternalService
  ) {}

  ngOnInit(): void {
    this.advertismentsService
      .getAdvertisments()
      .pipe(
        delay(2000),
        takeUntil(this.destroy$)
      )
      .subscribe(
        advertisements => {
          this.advertisements = advertisements;
          console.log(this.advertisements);
        },
        _error => {
          this.spinners[0] = {
            message: 'Can not load latest products',
            isError: true,
          };
        },
        () => {
          this.isDataLoading[0] = false;
          this.startSliderInterval(0, this.advertisments);
        }
      );

    this.advExternalService
      .getAdvertismentExternal()
      .pipe(
        delay(2000),
        takeUntil(this.destroy$)
      )
      .subscribe(
        data => {
          this.advertisementsExternal = data;
        },
        _error => {
          this.spinners[1].isError = true;
          this.isDataLoading[1] = false;
        },
        () => {
          this.isDataLoading[1] = false;
          this.startSliderInterval(1, this.advertisementsExternal);
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public startSliderInterval(id: number, arr: Array<IAdvExternal | IAdvInternal>): void {
    this.sliderInterval[id] = interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.currentIndex[id]++ >= arr.length - 1) {
          this.currentIndex[id] = 0;
        }
      });
  }
}
