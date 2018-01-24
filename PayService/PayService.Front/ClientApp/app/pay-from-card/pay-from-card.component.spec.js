import { async, TestBed } from '@angular/core/testing';
import { PayFromCardComponent } from './pay-from-card.component';
describe('PayFromCardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PayFromCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PayFromCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pay-from-card.component.spec.js.map