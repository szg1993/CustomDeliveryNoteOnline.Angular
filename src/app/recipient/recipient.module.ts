import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipientListComponent } from './components/recipient-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipientListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RecipientModule { }
