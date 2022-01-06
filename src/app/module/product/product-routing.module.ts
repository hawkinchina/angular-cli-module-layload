import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ListComponent } from './components/list/list.component';
import { PriceComponent } from './components/price/price.component';

//01.和子模块的根组件，配置成兄弟路由
// const routes: Routes = [
//   { path: '', component: ProductComponent },

//   { path: 'list', component: ListComponent },
//   { path: 'price', component: PriceComponent },
// ];

//02.和子模块的根组件，配置成父子路由
const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    // children: [
    //   { path: 'list', component: ListComponent },
    //   { path: 'price', component: PriceComponent },
    // ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
