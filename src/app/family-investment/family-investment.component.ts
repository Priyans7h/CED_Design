import { Component } from '@angular/core';

@Component({
  selector: 'app-family-investment',
  standalone: true,
  imports: [],
  templateUrl: './family-investment.component.html',
  styleUrl: './family-investment.component.scss'
})
export class FamilyInvestmentComponent {
  details: any[] = [
    { info: "Investments across family members", icon: "assets/images/Vector (1).png" },
    { info: "Investments across family members", icon: "assets/images/Vector (1).png" },
    { info: "Investments across family members", icon: "assets/images/Expand_Less_Large.png" }
  ]
  userDetails: any[] = [
    { icon: "assets/images/headshot 1.png", name: "Prithviraj", info: "Mutual funds 6.45L", amount: "10.45L" },
    { icon: "assets/images/image.png", name: "Mohan", info: "Mutual funds 6.45L", amount: "10.45L" },
    { icon: "assets/images/Mask Group.png", name: "Ramona", info: "Mutual funds 6.45L", amount: "10.45L" },
    { icon: "assets/images/Profile_Picture_Mock_Large.png", name: "kapoor", info: "Mutual funds 6.45L", amount: "10.45L" },
  ]
  progressBar: any[] = [
    { percentage: "4.10%", text: "Lorem ipsum" },
    { percentage: "4.10%", text: "Lorem ipsum" },
    { percentage: "4.10%", text: "Lorem ipsum" },
    { percentage: "4.10%", text: "Lorem ipsum" },
    { percentage: "4.10%", text: "Lorem ipsum" },
    { percentage: "4.10%", text: "Lorem ipsum" },

  ]
  moreDetails: any[] = [
    { info: "Investments across family members", icon: "assets/images/Expand_Less_Large.png" }
  ]
  moreUserDetails: any[] = [
    { icon: "assets/images/headshot 1.png", name: "Prithviraj", info: "Mutual funds 6.45L", amount: "10.45L" },
    { icon: "assets/images/image.png", name: "Mohan", info: "Mutual funds 6.45L", amount: "10.45L" },
    { icon: "assets/images/Mask Group.png", name: "Ramona", info: "Mutual funds 6.45L", amount: "10.45L" },
    { icon: "assets/images/Profile_Picture_Mock_Large.png", name: "kapoor", info: "Mutual funds 6.45L", amount: "10.45L" },
  ]
}
