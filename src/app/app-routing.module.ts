import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule} from './dashboard/dashboard.module'

const routes: Routes = [
  {path:"", redirectTo: "/dashboard", pathMatch:"full"},
  {path:"dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [
    DashboardModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
