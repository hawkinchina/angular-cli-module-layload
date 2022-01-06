import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ListComponent } from './components/list/list.component';
import { PriceComponent } from './components/price/price.component';
const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'list', component: ListComponent },
  { path: 'price', component: PriceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
