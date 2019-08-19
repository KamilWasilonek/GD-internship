import { CustomErrorHandler } from './custom-error-handler';
import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

class MockedNotificationService {
  showError(message: string): void {
    console.log(`${message}`);
  }
}

class ConsoleSpy {
  public logs: string[] = [];
  log(...args) {
    this.logs.push(args.join(' '));
  }
}

describe('CustomErrorHandler', () => {
  let handler: CustomErrorHandler;
  let originalConsole;
  let fakeConsole;

  beforeEach(() => {
    fakeConsole = new ConsoleSpy();
    originalConsole = window.console;
    console = fakeConsole;

    TestBed.configureTestingModule({
      providers: [CustomErrorHandler, MockedNotificationService]
    });

    handler = new CustomErrorHandler(new MockedNotificationService());
  });

  afterAll(() => (console = originalConsole));

  it('should be created', () => {
    expect(handler).toBeTruthy();
  });

  it('should handle Error', () => {
    handler.handleError(new Error('error'));
    spyOnProperty(Navigator.prototype, 'onLine').and.returnValue(false);

    // expect(fakeConsole.logs.length).toBe(1);
    expect(fakeConsole.logs).toContain('Client error: error');
  });

  it('should handle HttpError', () => {
    handler.handleError(
      new HttpErrorResponse({ error: 'Http error', status: 3 })
    );

    expect(fakeConsole.logs.length).toBe(1);
    expect(fakeConsole.logs).toContain('Status: 3, Message: Http error');
  });

  it('should handle HttpError with no internet connection', () => {
    spyOnProperty(Navigator.prototype, 'onLine').and.returnValue(false);
    handler.handleError(new HttpErrorResponse({}));

    expect(fakeConsole.logs.length).toBe(1);
    expect(fakeConsole.logs).toContain('No internet connection');
  });
});
