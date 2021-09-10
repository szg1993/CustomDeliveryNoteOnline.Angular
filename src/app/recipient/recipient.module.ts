import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientListComponent } from './components/recipient-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RecipientListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class RecipientModule { }
