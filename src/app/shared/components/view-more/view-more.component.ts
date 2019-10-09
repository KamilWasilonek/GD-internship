import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.scss'],
})
export class ViewMoreComponent {
  @Output() readonly showMore: EventEmitter<any> = new EventEmitter();

  showMoreItems(): void {
    this.showMore.emit();
  }
}
