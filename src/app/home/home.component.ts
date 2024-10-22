import { Component } from '@angular/core';
import { InvestmentInfoComponent } from '../investment-info/investment-info.component';
import { FamilyInvestmentComponent } from '../family-investment/family-investment.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { GradientComponent } from '../gradient/gradient.component';
import { WealthCalendarComponent } from '../wealth-calendar/wealth-calendar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InvestmentInfoComponent, FamilyInvestmentComponent, ImageSliderComponent, GradientComponent,WealthCalendarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
