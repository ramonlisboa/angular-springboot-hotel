import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelcheckinDetailsComponent } from './hotelcheckin-details.component';

describe('HotelcheckinDetailsComponent', () => {
  let component: HotelcheckinDetailsComponent;
  let fixture: ComponentFixture<HotelcheckinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelcheckinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelcheckinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
