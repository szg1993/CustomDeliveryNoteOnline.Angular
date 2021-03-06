import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipientListComponent } from './recipient/components/recipient-list.component';
import { RecipientModule } from './recipient/recipient.module';
import { RecipientUpsertComponent } from './recipient/components/recipient-upsert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipientUpsertComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'recipients', component: RecipientListComponent},
      {path: 'recipientUpsert', component: RecipientUpsertComponent},
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent, pathMatch: 'full'},
    ]),
    RecipientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
