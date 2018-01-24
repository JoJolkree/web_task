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
import { PayData } from './pay-data';
var PayFromCardComponent = /** @class */ (function () {
    function PayFromCardComponent() {
        this.payData = new PayData();
    }
    PayFromCardComponent.prototype.ngOnInit = function () {
    };
    PayFromCardComponent.prototype.numbersOnly = function () {
        this.payData.CVC = this.payData.CVC.replace(/[^0-9]/g, "");
    };
    PayFromCardComponent.prototype.formatCardNumber = function () {
        this.payData.CardNumber = this.payData.CardNumber.replace(/[^0-9]/g, "");
        var res = "";
        for (var i = 0; i < this.payData.CardNumber.length; i++) {
            if (i != 0 && i % 4 == 0)
                res += " ";
            res += this.payData.CardNumber[i];
        }
        this.payData.CardNumber = res;
    };
    PayFromCardComponent.prototype.formatDate = function () {
        this.payData.ExpirationDate = this.payData.ExpirationDate.replace(/[^0-9]/g, "");
        var res = "";
        if (this.payData.ExpirationDate.length == 2 && parseInt(this.payData.ExpirationDate) > 12) {
            this.payData.ExpirationDate = this.payData.ExpirationDate[0];
            return;
        }
        for (var i = 0; i < this.payData.ExpirationDate.length; i++) {
            if (i == 2)
                res += "/";
            res += this.payData.ExpirationDate[i];
        }
        this.payData.ExpirationDate = res;
    };
    PayFromCardComponent.prototype.validateSum = function () {
        this.payData.Sum = this.payData.Sum.replace(/[^0-9]/g, "");
        var inInt = parseInt(this.payData.Sum);
        if (inInt < 1000) {
            this.payData.Sum = "1000";
        }
        else if (inInt > 75000) {
            this.payData.Sum = "75000";
        }
    };
    PayFromCardComponent = __decorate([
        Component({
            selector: 'app-pay-from-card',
            templateUrl: './pay-from-card.component.html',
            styleUrls: ['./pay-from-card.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PayFromCardComponent);
    return PayFromCardComponent;
}());
export { PayFromCardComponent };
//# sourceMappingURL=pay-from-card.component.js.map