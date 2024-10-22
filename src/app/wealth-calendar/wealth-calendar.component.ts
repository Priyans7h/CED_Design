import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wealth-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wealth-calendar.component.html',
  styleUrl: './wealth-calendar.component.scss'
})
export class WealthCalendarComponent implements OnInit {
  @Input() wealthCalendars!: any;
  wealthCalendar: any[] = [
    { day: 15, month: "Dec", desc: "FD of Rs 1,50,000 in Axis Bank maturing" },
    { day: 25, month: "Jan", desc: "FD of Rs 1,50,000 in Axis Bank maturing" },
    { day: 10, month: "Feb", desc: "FD of Rs 1,50,000 in Axis Bank maturing" },
    { day: 7, month: "Dec", desc: "FD of Rs 1,50,000 in Axis Bank maturing" },
    { day: 25, month: "Jan", desc: "FD of Rs 1,50,000 in Axis Bank maturing" },
    { day: 10, month: "Feb", desc: "FD of Rs 1,50,000 in Axis Bank maturing" }
  ]
  ngOnInit(): void {
    if (this.wealthCalendars) {
      this.wealthCalendar = this.wealthCalendars
    }
  }

}
