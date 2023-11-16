import { Component } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-random-coffee',
  templateUrl: './random-coffee.component.html',
  styleUrls: ['./random-coffee.component.css'],
})
export class RandomCoffeeComponent {
  coffee: any;
  constructor(private coffeeService: CoffeeService) {
    this.coffee = [];
  }

  ngOnInit(): void {
    this.coffeeService.getRandomCoffee().subscribe({
      next: (data) => {
        this.coffee = data;
      },
      error: (e) => {
        console.log(e);
        alert(`Error has been acquired`);
      },
    });
  }
}
