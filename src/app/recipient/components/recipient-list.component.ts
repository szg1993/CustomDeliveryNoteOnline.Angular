import { Component, OnInit } from '@angular/core';
import { RecipientService } from '../services/recipient.services';
import { Subscription } from 'rxjs';
import { Recipient } from '../models/recipient';
import { IRecipientListResponse } from 'src/app/shared/response/recipient-list-response';
import { Router } from '@angular/router';

@Component({
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})

export class RecipientListComponent implements OnInit {
  pageTitle: string = 'Recipient list';
  filteredRecipients : Recipient[] = [];
  recipients : Recipient[] = [];
  recipientResponse: IRecipientListResponse;
  sub!: Subscription;
  errorMessage: string = '';

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredRecipients = this.performFilter(value);
  }

  constructor(private recipientService : RecipientService, private router: Router) { }

  performFilter(filterBy: string): Recipient[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipients.filter((recipient: Recipient) =>
      recipient.name.toLocaleUpperCase().includes(filterBy));
  }

  ngOnInit(): void {
     this.sub = this.recipientService.getAllRecipients().subscribe({
        next: response => {
          this.recipients = response;
        },
        error: err => this.errorMessage = err
      });
  }

  goToUpsert():void {
    this.router.navigate(['/recipientUpsert']);
  }

}
