import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPayLinksComponent } from './main-pay-links.component';

describe('MainPayLinksComponent', () => {
  let component: MainPayLinksComponent;
  let fixture: ComponentFixture<MainPayLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPayLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPayLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
