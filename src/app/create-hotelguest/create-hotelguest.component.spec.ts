import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelguestComponent } from './create-hotelguest.component';

describe('CreateHotelguestComponent', () => {
  let component: CreateHotelguestComponent;
  let fixture: ComponentFixture<CreateHotelguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHotelguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHotelguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
