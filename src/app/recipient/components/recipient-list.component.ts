import { Component, OnInit } from '@angular/core';
import { IRecipient } from 'src/app/models/recipient';
import { RecipientService } from '../services/recipient.services';

@Component({
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})

export class RecipientListComponent implements OnInit {
  pageTitle: string = 'Recipient list';
  filteredRecipients : IRecipient[] = [];
  recipients : IRecipient[] = [];

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredRecipients = this.performFilter(value);
  }

  constructor(private recipientService : RecipientService) { }

  performFilter(filterBy: string): IRecipient[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipients.filter((recipient: IRecipient) =>
      recipient.name.toLocaleUpperCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.filteredRecipients = this.recipients;
    //this.recipients = this.recipientService.getAllRecipients();
  }

}
