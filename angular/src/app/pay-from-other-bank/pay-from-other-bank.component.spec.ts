import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFromOtherBankComponent } from './pay-from-other-bank.component';

describe('PayFromOtherBankComponent', () => {
  let component: PayFromOtherBankComponent;
  let fixture: ComponentFixture<PayFromOtherBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFromOtherBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayFromOtherBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
