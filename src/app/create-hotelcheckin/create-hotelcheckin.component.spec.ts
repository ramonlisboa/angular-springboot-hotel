import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelcheckinComponent } from './create-hotelcheckin.component';

describe('CreateHotelcheckinComponent', () => {
  let component: CreateHotelcheckinComponent;
  let fixture: ComponentFixture<CreateHotelcheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHotelcheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHotelcheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
