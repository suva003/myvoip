import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessvoipComponent } from './businessvoip.component';

describe('BusinessvoipComponent', () => {
  let component: BusinessvoipComponent;
  let fixture: ComponentFixture<BusinessvoipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessvoipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessvoipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
