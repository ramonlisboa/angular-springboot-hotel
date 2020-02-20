import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelcheckinListComponent } from './hotelcheckin-list.component';

describe('HotelcheckinListComponent', () => {
  let component: HotelcheckinListComponent;
  let fixture: ComponentFixture<HotelcheckinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelcheckinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelcheckinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
