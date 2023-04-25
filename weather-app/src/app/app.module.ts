import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrComponent } from './maps/fr/fr.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FonctionComponent } from './fonction/fonction.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [AppComponent, FrComponent, FonctionComponent, ResultComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
