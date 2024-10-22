import { Component } from '@angular/core';
import { GradientComponent } from '../gradient/gradient.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { FamilyInvestmentComponent } from '../family-investment/family-investment.component';
import { InvestmentInfoComponent } from '../investment-info/investment-info.component';
import { WealthCalendarComponent } from '../wealth-calendar/wealth-calendar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wealth',
  standalone: true,
  imports: [CommonModule, InvestmentInfoComponent, FamilyInvestmentComponent, ImageSliderComponent, GradientComponent, WealthCalendarComponent],
  templateUrl: './wealth.component.html',
  styleUrl: './wealth.component.scss'
})
export class WealthComponent {
  wealthCalendars: any[] = [
    { day: 7, month: "Dec", desc: "FD of Rs 1,50,000 in Axis Bank maturing" }
  ]
}
