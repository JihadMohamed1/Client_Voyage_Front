import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {AddformComponent} from './addform/addform.component'

const routes: Routes = [
  { path: 'Clients', component: ClientComponent },
  { path: 'sidebar', component: SideBarComponent },
  { path: 'AddForm', component: AddformComponent },
  { path: '', redirectTo: '/Clients', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
