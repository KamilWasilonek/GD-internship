import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ISocialIcon } from '@app/shared/interfaces/social-icon.interface';
import * as fromStore from '@app/@store';
import * as fromSocialIcons from '@app/@store/social-icons';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  socialIconsState$: Observable<ISocialIcon[]>;

  constructor(private readonly store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.socialIconsState$ = this.store.pipe(select(fromSocialIcons.selectSocialIconsData));

    this.store.dispatch(new fromSocialIcons.LoadSocialIconsAction());
  }
}
