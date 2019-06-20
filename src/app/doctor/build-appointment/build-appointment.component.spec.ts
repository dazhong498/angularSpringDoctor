import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildAppointmentComponent } from './build-appointment.component';

describe('BuildAppointmentComponent', () => {
  let component: BuildAppointmentComponent;
  let fixture: ComponentFixture<BuildAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
