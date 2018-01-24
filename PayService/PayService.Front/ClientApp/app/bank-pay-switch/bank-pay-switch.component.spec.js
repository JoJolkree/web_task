import { async, TestBed } from '@angular/core/testing';
import { BankPaySwitchComponent } from './bank-pay-switch.component';
describe('BankPaySwitchComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BankPaySwitchComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BankPaySwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bank-pay-switch.component.spec.js.map