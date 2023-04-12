import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrComponent} from "./maps/fr/fr.component";

const routes: Routes = [
  { path: '', component: FrComponent },
  { path: '**', component: FrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
