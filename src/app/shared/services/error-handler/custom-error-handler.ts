import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private notificationService: NotificationService) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        this.notificationService.showError(`No internet connection`);
      } else {
        this.notificationService.showError(
          `Status: ${error.status}, Message: ${error.error}`
        );
      }
    } else {
      this.notificationService.showError(`Client error: ${error.message}`);
    }
  }
}
