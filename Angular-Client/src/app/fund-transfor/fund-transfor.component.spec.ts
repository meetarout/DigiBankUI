import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransforComponent } from './fund-transfor.component';

describe('FundTransforComponent', () => {
  let component: FundTransforComponent;
  let fixture: ComponentFixture<FundTransforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTransforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTransforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
