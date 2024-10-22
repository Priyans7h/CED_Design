import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WealthCalendarComponent } from './wealth-calendar/wealth-calendar.component';
import { HomeComponent } from './home/home.component';
import { InvestmentInfoComponent } from './investment-info/investment-info.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WealthCalendarComponent, HomeComponent, InvestmentInfoComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CED';
}
