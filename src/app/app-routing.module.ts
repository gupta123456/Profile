import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileModule} from './profile/profile.module';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
