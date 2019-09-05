import { Component, OnInit, DoCheck, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { JoinUserService } from './join-user.service';
import { UserSubscription } from './user-subscription';
import { validateEmail } from '@app/shared/functions/validations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
})
export class JoinUsComponent implements OnInit, DoCheck, OnDestroy {
  @ViewChild('email', { static: false }) email: ElementRef;

  subscriptionForm: FormGroup;
  submitted = false;
  userSubscription: UserSubscription;
  serverMessage = '';
  isSubscriptionCreated = false;

  constructor(private fb: FormBuilder, private joinService: JoinUserService) {}
  private addToSubscription = false;
  private isFocused = false;

  subscription: Subscription;
  ngOnInit() {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, validateEmail]],
    });
  }

  public onSubmit() {
    this.serverMessage = '';
    this.isSubscriptionCreated = false;
    this.submitted = true;
    if (this.subscriptionForm.valid) {
      this.userSubscription = {
        email: this.subscriptionForm.controls.email.value,
      };
      this.joinService.createSubscription(this.userSubscription).subscribe(
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
  onReceivedClick() {
    if (this.addToSubscription) {
      this.email.nativeElement.focus();
      this.isFocused = true;
    }
  }
  onBlur() {
    if (this.isFocused) {
      this.email.nativeElement.blur();
      this.isFocused = false;
    }
  }
  ngDoCheck() {
    this.subscription = this.joinService.linkIsClicked.subscribe(click => {
      this.addToSubscription = click;
    });
    this.onReceivedClick();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
