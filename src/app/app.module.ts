import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';
import { NewCoffeeComponent } from './components/new-coffee/new-coffee.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomCoffeeComponent,
    NewCoffeeComponent,
    CoffeeDetailsComponent,
    HeaderComponent,
    SearchComponent,
    CoffeesComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
