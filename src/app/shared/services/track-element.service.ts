import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackElementService {
  trackElement(index: number, element: any): number {
    return element ? index : undefined;
  }
}
