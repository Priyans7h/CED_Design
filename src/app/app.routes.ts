import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WealthComponent } from './wealth/wealth.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "wealth", component: WealthComponent }
];
