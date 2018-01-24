var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BankPayData } from './bank-pay-data';
var PayFromOtherBankComponent = /** @class */ (function () {
    function PayFromOtherBankComponent() {
        this.payData = new BankPayData();
    }
    PayFromOtherBankComponent.prototype.ngOnInit = function () {
    };
    PayFromOtherBankComponent.prototype.formatBic = function () {
        this.payData.BIC = this.payData.BIC.replace(/[^0-9]/g, "");
    };
    PayFromOtherBankComponent.prototype.formatNumber = function () {
        this.payData.Number = this.payData.Number.replace(/[^0-9]/g, "");
    };
    PayFromOtherBankComponent.prototype.formatSum = function () {
        this.payData.Sum = this.payData.Sum.replace(/[^0-9]/g, "");
        var inInt = parseInt(this.payData.Sum);
        if (inInt < 1000) {
            this.payData.Sum = "1000";
        }
        else if (inInt > 75000) {
            this.payData.Sum = "75000";
        }
    };
    PayFromOtherBankComponent = __decorate([
        Component({
            selector: 'app-pay-from-other-bank',
            templateUrl: './pay-from-other-bank.component.html',
            styleUrls: ['./pay-from-other-bank.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PayFromOtherBankComponent);
    return PayFromOtherBankComponent;
}());
export { PayFromOtherBankComponent };
//# sourceMappingURL=pay-from-other-bank.component.js.map