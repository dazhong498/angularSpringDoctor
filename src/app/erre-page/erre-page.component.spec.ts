import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrePageComponent } from './erre-page.component';

describe('ErrePageComponent', () => {
  let component: ErrePageComponent;
  let fixture: ComponentFixture<ErrePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
