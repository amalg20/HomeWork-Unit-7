import { Component, EventEmitter, Output } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output()
  searchTextEvent: EventEmitter<string>;

  queryName: string = '';
  coffees: any[] = [];

  constructor(private coffeeService: CoffeeService) {
    this.searchTextEvent = new EventEmitter<string>();
  }

  search() {
    this.coffeeService.search(this.queryName).subscribe(
      (data) => {
        this.coffees = data;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
}
