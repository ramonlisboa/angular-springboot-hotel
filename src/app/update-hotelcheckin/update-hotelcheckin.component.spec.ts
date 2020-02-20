import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHotelcheckinComponent } from './update-hotelcheckin.component';

describe('UpdateHotelcheckinComponent', () => {
  let component: UpdateHotelcheckinComponent;
  let fixture: ComponentFixture<UpdateHotelcheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHotelcheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHotelcheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
