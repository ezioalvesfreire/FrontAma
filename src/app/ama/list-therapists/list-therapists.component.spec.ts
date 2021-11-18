import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTherapistsComponent } from './list-therapists.component';

describe('ListTherapistsComponent', () => {
  let component: ListTherapistsComponent;
  let fixture: ComponentFixture<ListTherapistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTherapistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTherapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
