import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultSessionComponent } from './consult-session.component';

describe('ConsultSessionComponent', () => {
  let component: ConsultSessionComponent;
  let fixture: ComponentFixture<ConsultSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
