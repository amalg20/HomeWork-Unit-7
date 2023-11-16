import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';
import { NewCoffeeComponent } from './components/new-coffee/new-coffee.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CoffeesComponent } from './components/coffees/coffees.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random-coffee', component: RandomCoffeeComponent },
  { path: 'new-coffee', component: NewCoffeeComponent },
  { path: 'coffee-details/:id', component: CoffeeDetailsComponent },
  { path: 'coffees', component: CoffeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],

})
export class AppRoutingModule { }
