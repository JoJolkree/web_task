var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MainPayLinksComponent } from './main-pay-links/main-pay-links.component';
import { PayFromCardComponent } from './pay-from-card/pay-from-card.component';
import { BankPaySwitchComponent } from './bank-pay-switch/bank-pay-switch.component';
import { PayFromOtherBankComponent } from './pay-from-other-bank/pay-from-other-bank.component';
import { RequestPayComponent } from './request-pay/request-pay.component';
import { FormsModule } from '@angular/forms';
var appRoutes = [
    { path: 'pay', component: PayFromCardComponent },
    { path: 'pay/internet-bank', component: PayFromOtherBankComponent },
    { path: 'request', component: RequestPayComponent },
    { path: '**', redirectTo: '/pay' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                FooterComponent,
                ContentComponent,
                MainPayLinksComponent,
                PayFromCardComponent,
                BankPaySwitchComponent,
                PayFromOtherBankComponent,
                RequestPayComponent,
            ],
            imports: [
                BrowserModule,
                RouterModule.forRoot(appRoutes),
                FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map