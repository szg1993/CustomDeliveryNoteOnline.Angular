import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.css']
})
export class RecipientsComponent implements OnInit {
  pageTitle : string = 'Recipient List';
  
  constructor() { }

  ngOnInit(): void {
  }

}
