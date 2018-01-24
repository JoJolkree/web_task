import { Component, OnInit } from '@angular/core';
import { BankPayData } from './bank-pay-data';
import { InternetBankData } from "../../models/InternetBankData";
import { InternetBankService } from "../../services/InternetBankService";

@Component({
  selector: 'app-pay-from-other-bank',
  templateUrl: './pay-from-other-bank.component.html',
  styleUrls: ['./pay-from-other-bank.component.css'],
  providers: [InternetBankService]
})
export class PayFromOtherBankComponent implements OnInit {

  private payData: BankPayData;

  constructor(private internetService: InternetBankService) { 
    this.payData = new BankPayData();
  }

  ngOnInit() {
  }

  formatBic() {
    this.payData.BIC = this.payData.BIC.replace(/[^0-9]/g, "");
  }

  formatNumber() {
    this.payData.Number = this.payData.Number.replace(/[^0-9]/g, "");
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

  save() {
      var data = new InternetBankData();
      data.sender = this.payData.Sender;
      data.bic = this.payData.BIC;
      data.number = this.payData.Number;
      data.goal = this.payData.Goal;
      data.sum = this.payData.Sum;

      this.internetService.createRequest(data);

      this.payData = new BankPayData();
  }
}
