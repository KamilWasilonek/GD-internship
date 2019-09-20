import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { JoinUserService } from '../../../shared/services/join-user.service';
import { UserSubscription } from './user-subscription';
import { validateEmail } from '@app/shared/functions/validations';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
})
export class JoinUsComponent implements OnInit, OnDestroy {
  @ViewChild('email', { static: false }) email: ElementRef;
  subscriptionForm: FormGroup;
  unsubscribe$ = new Subject<void>();

  userSubscription: UserSubscription;
  submitted = false;
  serverMessage = '';
  isSubscriptionCreated = false;

  constructor(private readonly fb: FormBuilder, private readonly joinService: JoinUserService) {}

  ngOnInit(): void {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, validateEmail]],
    });
    this.joinService.linkIsClicked.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.email.nativeElement.focus();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onSubmit(): void {
    this.serverMessage = '';
    this.isSubscriptionCreated = false;
    this.submitted = true;
    if (!this.subscriptionForm.valid) {
      return;
    }
    this.userSubscription = {
      email: this.subscriptionForm.controls.email.value,
    };
    this.joinService
      .createSubscription(this.userSubscription)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () => {
          this.serverMessage = 'Subscription created';
          this.isSubscriptionCreated = true;
        },
        serverErrors => {
          this.serverMessage = serverErrors.error.message;
        }
      );
  }
}
