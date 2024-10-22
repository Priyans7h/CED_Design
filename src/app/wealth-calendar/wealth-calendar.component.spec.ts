import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthCalendarComponent } from './wealth-calendar.component';

describe('WealthCalendarComponent', () => {
  let component: WealthCalendarComponent;
  let fixture: ComponentFixture<WealthCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WealthCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WealthCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
