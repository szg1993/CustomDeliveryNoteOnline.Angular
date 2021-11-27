import { Component, OnInit } from '@angular/core';
import { IRecipientUpsert } from '../models/recipient-upsert';

@Component({
  templateUrl: './recipient-upsert.component.html',
  styleUrls: ['./recipient-upsert.component.css']
})

export class RecipientUpsertComponent implements OnInit {
  pageTitle: string = 'Create Recipient';
  recipientUpsert : IRecipientUpsert = {
    code: null,
    name: null,
    country: null,
    city: null,
    zip: null,
    address: null,
    isOutlander: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
