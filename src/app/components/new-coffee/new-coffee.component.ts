import { Component } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-new-coffee',
  templateUrl: './new-coffee.component.html',
  styleUrls: ['./new-coffee.component.css']
})
export class NewCoffeeComponent {
  name: string = '';
  tagline: string = '';
  description: string = '';
  firstRoasted: string = '';
  roasterTips: string = '';
  strengthLevel: number = 0;
  contributedBy: string = '';


  constructor(private coffeeService: CoffeeService) { }

  isDisabled(): boolean {
    return !this.name || !this.tagline || !this.description || !this.firstRoasted || !this.strengthLevel || !this.contributedBy;
  }

  createCoffee() {
    const coffeeData = {
      name: this.name,
      tagline: this.tagline,
      description: this.description,
      firstRoasted: this.firstRoasted,
      roasterTips: this.roasterTips,
      strengthLevel: this.strengthLevel,
      contributedBy: this.contributedBy
    };

    this.coffeeService.postCoffee(coffeeData).subscribe(
      response => {
        console.log('Coffee created successfully:', response);
        alert('Coffee created successfully: ' + JSON.stringify(response));
      },
      error => {
        console.error('Error creating coffee:', error);
      }
    );
  }

}

