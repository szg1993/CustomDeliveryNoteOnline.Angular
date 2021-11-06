import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-recipient-upsert',
  templateUrl: './recipient-upsert.component.html',
  styleUrls: ['./recipient-upsert.component.css']
})
export class RecipientUpsertComponent implements OnInit {
  pageTitle: string = 'Create Recipient';
  constructor() { }

  ngOnInit(): void {
  }

}
