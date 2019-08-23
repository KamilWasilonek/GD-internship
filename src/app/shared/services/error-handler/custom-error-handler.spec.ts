import { CustomErrorHandler } from './custom-error-handler';
import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

class MockedNotificationService {
  showError(message: string): void {
    console.log(`${message}`);
  }
}

describe('CustomErrorHandler', () => {
  let handler: CustomErrorHandler;

  beforeEach(() => {
    spyOn(console, 'log');

    TestBed.configureTestingModule({
      providers: [CustomErrorHandler, MockedNotificationService]
    });

    handler = new CustomErrorHandler(new MockedNotificationService());
  });

  it('should be created', () => {
    expect(handler).toBeTruthy();
  });

  it('should handle Error', () => {
    handler.handleError(new Error('error'));

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Client error: error');
  });

  it('should handle HttpError', () => {
    handler.handleError(
      new HttpErrorResponse({ error: 'Http error', status: 3 })
    );

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Status: 3, Message: Http error');
  });

  it('should handle HttpError with no internet connection', () => {
    spyOnProperty(Navigator.prototype, 'onLine').and.returnValue(false);
    handler.handleError(new HttpErrorResponse({}));

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('No internet connection');
  });
});
