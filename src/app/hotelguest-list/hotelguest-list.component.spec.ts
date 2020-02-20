import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelguestListComponent } from './hotelguest-list.component';

describe('HotelguestListComponent', () => {
  let component: HotelguestListComponent;
  let fixture: ComponentFixture<HotelguestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelguestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelguestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
