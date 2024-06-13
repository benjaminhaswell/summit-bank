import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Summit Bank' },

//   Wildcard route should be last
  { path: '**', component: PageNotFoundComponent, title: 'Page Not Found | Summit Bank' },
];
export const routing = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }