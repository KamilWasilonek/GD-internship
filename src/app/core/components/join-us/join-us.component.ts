import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

import { JoinUserService } from '../../../shared/services/join-user.service';
import { validateEmail } from '@app/shared/functions/validations';
import { Store, select } from '@ngrx/store';
import * as fromStore from '@app/@store';
import * as fromJoinUs from '@app/@store/join-us';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
})
export class JoinUsComponent implements OnInit, OnDestroy {
  @ViewChild('email', { static: false }) email: ElementRef;
  subscriptionForm: FormGroup;
  unsubscribe$ = new Subject<void>();

  submitted = false;

  joinUsState$: Observable<fromJoinUs.JoinUsState>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<fromStore.AppState>,
    private readonly joinService: JoinUserService
  ) {}

  ngOnInit(): void {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, validateEmail]],
    });

    this.joinService.linkIsClicked.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.email.nativeElement.focus();
    });

    this.joinUsState$ = this.store.pipe(select(fromJoinUs.selectState));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onSubmit(): void {
    this.submitted = true;
    if (!this.subscriptionForm.valid) {
      return;
    }

    this.store.dispatch(
      new fromJoinUs.JoinUserAction({
        email: this.subscriptionForm.controls.email.value,
      })
    );
  }
}
