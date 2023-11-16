import { Component, OnInit, Input } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';
import { coffee } from 'src/app/models/coffee.model'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {
  coffee: any;

  @Input("coffeeProp")
  coffeeProp: coffee;

  @Input()
  id: string;

  @Input("name")
  name: any;

  constructor(private coffeeService: CoffeeService, private activateRoute: ActivatedRoute) {
    this.id = "";
    this.coffeeProp = new coffee("", "", "", "", "", 0, "");
  }


  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params["id"];
    console.log(this.id);
    if (this.id) {
      this.getCoffeeById();
    } else if
      (this.coffeeProp) {
      this.coffee = this.coffeeProp;
    }
  }

  getCoffeeById() {
    this.coffeeService.getCoffeeById(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.coffee = data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
}
