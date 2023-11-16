
import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html', styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {

  coffees: any[] = [];
  showDetails: boolean = false;
  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.getCoffees();
  }
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }


  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((data) => {
      this.coffees = data;
    },
      (error) => {
        console.error('Error fetching coffees:', error);
      });
  }
  searchText(text: string) {
    this.coffeeService.search(text).subscribe(
      (data) => {
        this.coffees = data;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
}


