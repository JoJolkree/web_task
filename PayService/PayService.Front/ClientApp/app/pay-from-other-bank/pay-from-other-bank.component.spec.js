import { async, TestBed } from '@angular/core/testing';
import { PayFromOtherBankComponent } from './pay-from-other-bank.component';
describe('PayFromOtherBankComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PayFromOtherBankComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PayFromOtherBankComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pay-from-other-bank.component.spec.js.map