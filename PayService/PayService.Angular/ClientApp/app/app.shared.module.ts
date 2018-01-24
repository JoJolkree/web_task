import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { MainPayLinksComponent } from './components/main-pay-links/main-pay-links.component';
import { PayFromCardComponent } from './components/pay-from-card/pay-from-card.component';
import { BankPaySwitchComponent } from './components/bank-pay-switch/bank-pay-switch.component';
import { PayFromOtherBankComponent } from './components/pay-from-other-bank/pay-from-other-bank.component';
import { RequestPayComponent } from './components/request-pay/request-pay.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";


const appRoutes: Routes =
[
    { path: 'pay', component: PayFromCardComponent },
    { path: 'pay/internet-bank', component: PayFromOtherBankComponent },
    { path: 'request', component: RequestPayComponent },
    { path: '**', redirectTo: '/pay' }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        MainPayLinksComponent,
        PayFromCardComponent,
        BankPaySwitchComponent,
        PayFromOtherBankComponent,
        RequestPayComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModuleShared { }
