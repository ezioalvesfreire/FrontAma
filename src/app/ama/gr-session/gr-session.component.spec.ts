import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrSessionComponent } from './gr-session.component';

describe('GrSessionComponent', () => {
  let component: GrSessionComponent;
  let fixture: ComponentFixture<GrSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
