import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHotelguestComponent } from './update-hotelguest.component';

describe('UpdateHotelguestComponent', () => {
  let component: UpdateHotelguestComponent;
  let fixture: ComponentFixture<UpdateHotelguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHotelguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHotelguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
