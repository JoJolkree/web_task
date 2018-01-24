import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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


const appRoutes: Routes = 
[
  { path: 'pay', component: PayFromCardComponent },
  { path: 'pay/internet-bank', component: PayFromOtherBankComponent},
  { path: 'request', component: RequestPayComponent },
  { path:'**', redirectTo: '/pay' }
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
export class AppModule { }
