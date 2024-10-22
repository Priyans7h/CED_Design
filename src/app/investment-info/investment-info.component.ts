import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-investment-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-info.component.html',
  styleUrl: './investment-info.component.scss'
})
export class InvestmentInfoComponent {
  investments: any[] = [
    { name: "Investments", data: "82.05 L" },
    { name: "Insurance", data: "Comming Soon" },
    { name: "Insurance", data: "Comming Soon" }
  ]
  investmentsDetails:any[]=[
    {icon:"assets/images/Group 705.png",name:"Mutual funds", data:"40.20L", inc:"+5.01"},
    {icon:"assets/images/Group 824.png",name:"Insurance", data:"40.20L", inc:"+5.01"},
    {icon:"assets/images/Group 1073.png",name:"Stocks", data:"40.20L", inc:"+5.01"},
    {icon:"assets/images/Group 1074.png",name:"Real estate", data:"40.20L", inc:"+5.01"}
  ]

}
