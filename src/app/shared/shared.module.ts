import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SmallTitleComponent } from './components/small-title/small-title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProductItemComponent, SmallTitleComponent, SpinnerComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ProductItemComponent, SmallTitleComponent, SpinnerComponent],
})
export class SharedModule {}
