import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipientsComponent } from './recipients/recipients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'recipients', component: RecipientsComponent},
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent, pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
