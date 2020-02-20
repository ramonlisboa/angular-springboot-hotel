import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelguestDetailsComponent } from './hotelguest-details.component';

describe('HotelguestDetailsComponent', () => {
  let component: HotelguestDetailsComponent;
  let fixture: ComponentFixture<HotelguestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelguestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelguestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
