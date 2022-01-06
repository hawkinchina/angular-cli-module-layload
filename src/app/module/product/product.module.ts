import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ListComponent } from './components/list/list.component';
import { PriceComponent } from './components/price/price.component';


@NgModule({
  declarations: [
    ProductComponent,
    ListComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
