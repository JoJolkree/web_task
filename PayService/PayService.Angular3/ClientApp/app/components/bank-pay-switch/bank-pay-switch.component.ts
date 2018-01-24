import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bank-pay-switch',
  templateUrl: './bank-pay-switch.component.html',
  styleUrls: ['./bank-pay-switch.component.css']
})
export class BankPaySwitchComponent implements OnInit {

  location: Location;
  constructor(location: Location) {
    this.location = location;
   }

  ngOnInit() {
  }
}
