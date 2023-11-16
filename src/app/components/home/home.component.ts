import { Component } from '@angular/core';
@Component({
  selector: 'app-home', templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent {
  public coffees = [
    {
      title: 'All Coffees',
      description: 'A list of all coffee in the database',
      imagePath: 'assets/all-coffees.jpg',
      alt: 'All Coffees',
      link: '/coffees',
      buttonText: 'Details',
      imgWidth: 'auto',
      imgHeight: 'auto',
    },
    {
      title: 'Random Coffee',
      description: 'Let us choose a Coffee for you to look at!',
      imagePath: 'assets/random-coffee.jpg',
      alt: 'Random Coffee',
      link: '/random-coffee',
      buttonText: 'Random Coffee',
      imgWidth: 'auto',
      imgHeight: 'auto',
    },
    {
      title: 'New Coffee',
      description: 'Add a new coffee to the Database',
      imagePath: 'assets/new-coffee.jpg',
      alt: 'New Coffee',
      link: '/new-coffee',
      buttonText: 'New Coffee',
      imgWidth: 'auto',
      imgHeight: 'auto',
    },
  ];
}

