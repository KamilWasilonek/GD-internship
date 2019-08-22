import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ErrorPageComponent } from './error-page/error-page.component'

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./../app/home-page/home-page.module').then(mod => mod.HomePageModule) },
  {
    path: 'products',
    loadChildren: () => import('./../app/product-list-page/product-list-page.module').then(mod => mod.ProductListPageModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', component: ErrorPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
