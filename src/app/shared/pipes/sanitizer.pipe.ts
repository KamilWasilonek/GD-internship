import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
})
export class SanitizerPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}
  transform(url: string, type: string): SafeUrl {
    switch (type) {
      case 'url':
        return this.sanitizer.sanitize(SecurityContext.URL, url);
      case 'link':
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      default:
        return url;
    }
  }
}
