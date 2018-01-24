import { Component, OnInit } from '@angular/core';
import { PayData } from './pay-data';

@Component({
  selector: 'app-pay-from-card',
  templateUrl: './pay-from-card.component.html',
  styleUrls: ['./pay-from-card.component.css']
})
export class PayFromCardComponent implements OnInit {

  private payData: PayData

  constructor() { 
    this.payData = new PayData();
  }

  ngOnInit() {
  }
  
  numbersOnly() {
    this.payData.CVC = this.payData.CVC.replace(/[^0-9]/g, "");
  }

  formatCardNumber() {
    this.payData.CardNumber = this.payData.CardNumber.replace(/[^0-9]/g, "");
    var res = "";
    for(var i = 0; i < this.payData.CardNumber.length; i++)
    {
      if(i != 0 && i % 4 == 0) res += " ";
      res += this.payData.CardNumber[i];
    }

    this.payData.CardNumber = res;
  }

  formatDate() {
    this.payData.ExpirationDate = this.payData.ExpirationDate.replace(/[^0-9]/g, "");
    var res = "";
    if(this.payData.ExpirationDate.length == 2 && parseInt(this.payData.ExpirationDate) > 12)
    {
      this.payData.ExpirationDate = this.payData.ExpirationDate[0];
      return;
    }

    for(var i = 0; i < this.payData.ExpirationDate.length; i++)
    {
      if(i == 2) res += "/";
      res += this.payData.ExpirationDate[i];
    }

    this.payData.ExpirationDate = res;
  }

  validateSum() {
    this.payData.Sum = this.payData.Sum.replace(/[^0-9]/g, "");

    var inInt = parseInt(this.payData.Sum);
    if(inInt < 1000) {
      this.payData.Sum = "1000";
    }
    else if(inInt > 75000) {
      this.payData.Sum = "75000";
    }
  }

}
