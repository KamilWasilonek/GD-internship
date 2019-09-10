import { AbstractControl } from '@angular/forms';

export function validateEmail(control: AbstractControl) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!control.value.trim().match(emailRegex)) {
    return { validEmail: true };
  }
  return null;
}
