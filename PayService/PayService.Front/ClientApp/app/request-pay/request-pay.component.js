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
import { RequestPayData } from './request-pay-data';
var RequestPayComponent = /** @class */ (function () {
    function RequestPayComponent() {
        this.payData = new RequestPayData();
    }
    RequestPayComponent.prototype.ngOnInit = function () {
    };
    RequestPayComponent.prototype.formatBic = function () {
        this.payData.BIC = this.payData.BIC.replace(/[^0-9]/g, "");
    };
    RequestPayComponent.prototype.formatNumber = function () {
        this.payData.Number = this.payData.Number.replace(/[^0-9]/g, "");
    };
    RequestPayComponent.prototype.formatSum = function () {
        this.payData.Sum = this.payData.Sum.replace(/[^0-9]/g, "");
        var inInt = parseInt(this.payData.Sum);
        if (inInt < 1000) {
            this.payData.Sum = "1000";
        }
        else if (inInt > 75000) {
            this.payData.Sum = "75000";
        }
    };
    RequestPayComponent.prototype.formatPhoneNumber = function () {
        this.payData.PhoneNumber = "+" + this.payData.PhoneNumber.replace(/[^0-9]/g, "");
        if (this.payData.PhoneNumber.length <= 2)
            this.payData.PhoneNumber = "+7";
        var res = "";
        for (var i = 0; i < this.payData.PhoneNumber.length; i++) {
            if (i == 2)
                res += " ";
            if (i == 5)
                res += " ";
            if (i == 8)
                res += "-";
            if (i == 10)
                res += "-";
            res += this.payData.PhoneNumber[i];
        }
        this.payData.PhoneNumber = res;
    };
    RequestPayComponent = __decorate([
        Component({
            selector: 'app-request-pay',
            templateUrl: './request-pay.component.html',
            styleUrls: ['./request-pay.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RequestPayComponent);
    return RequestPayComponent;
}());
export { RequestPayComponent };
//# sourceMappingURL=request-pay.component.js.map