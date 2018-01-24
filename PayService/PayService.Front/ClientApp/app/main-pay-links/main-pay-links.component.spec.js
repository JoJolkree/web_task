import { async, TestBed } from '@angular/core/testing';
import { MainPayLinksComponent } from './main-pay-links.component';
describe('MainPayLinksComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MainPayLinksComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MainPayLinksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=main-pay-links.component.spec.js.map