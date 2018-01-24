import { Component, OnInit } from '@angular/core';
import { RequestPayData } from './request-pay-data'
import { Request } from "../../models/Request";
import { RequestService } from "../../services/RequestService";

@Component({
  selector: 'app-request-pay',
  templateUrl: './request-pay.component.html',
  styleUrls: ['./request-pay.component.css'],
  providers: [RequestService]
})
export class RequestPayComponent implements OnInit {

  private payData: RequestPayData;

  constructor(private requestService: RequestService) { 
    this.payData = new RequestPayData();
  }

  ngOnInit() {
  }

  formatBic() {
    this.payData.BIC = this.payData.BIC.replace(/[^0-9]/g, "");
  }

  formatNumber() {
      this.payData.Number = this.payData.Number.replace(/[^0-9]/g, "");
  }

  formatSender() {
      this.payData.Sender = this.payData.Sender.replace(/[^0-9]/g, "");
  }

  formatSum() {
    this.payData.Sum = this.payData.Sum.replace(/[^0-9]/g, "");
    
    var inInt = parseInt(this.payData.Sum);
    if(inInt < 1000) {
      this.payData.Sum = "1000";
    }
    else if(inInt > 75000) {
      this.payData.Sum = "75000";
    }
  }

  formatPhoneNumber() {
    this.payData.PhoneNumber = "+" + this.payData.PhoneNumber.replace(/[^0-9]/g, "");

    if(this.payData.PhoneNumber.length <= 2) this.payData.PhoneNumber = "+7";
    
    var res = "";
    for(var i = 0; i < this.payData.PhoneNumber.length; i++) {
      if(i == 2) res += " ";
      if(i == 5) res += " ";
      if(i == 8) res += "-";
      if(i == 10) res += "-";
      res += this.payData.PhoneNumber[i];
    }
    
    this.payData.PhoneNumber = res;
  }

  save() {
      var request = new Request();
      request.individualNumber = this.payData.Sender;
      request.bankNumber = this.payData.BIC;
      request.accountNumber = this.payData.Number;
      request.purposeOfPayment = this.payData.Goal;
      request.amount = parseInt(this.payData.Sum);
      request.phoneNumber = this.payData.PhoneNumber;
      request.email = this.payData.Email;

      this.requestService.createRequest(request);

      this.payData = new RequestPayData();
      alert("Запрос отправлен");
  }
}
