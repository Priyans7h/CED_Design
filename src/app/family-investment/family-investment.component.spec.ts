import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyInvestmentComponent } from './family-investment.component';

describe('FamilyInvestmentComponent', () => {
  let component: FamilyInvestmentComponent;
  let fixture: ComponentFixture<FamilyInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyInvestmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilyInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
