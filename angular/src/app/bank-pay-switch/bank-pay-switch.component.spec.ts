import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPaySwitchComponent } from './bank-pay-switch.component';

describe('BankPaySwitchComponent', () => {
  let component: BankPaySwitchComponent;
  let fixture: ComponentFixture<BankPaySwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaySwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
