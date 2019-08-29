import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SpinnerComponent, ProductItemComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ProductItemComponent, SpinnerComponent],
})
export class SharedModule {}
