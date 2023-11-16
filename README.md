# IronCoffee

IronCoffees is an Angular application that showcases and saves handcrafted coffees. It provides a user-friendly interface to browse, search, and create new coffee.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## The IronCoffees project includes the following Routes:

* `Home Page`:
   - contains these options:
     * `/coffees`: lis all coffees.
     * `/new-coffee`: create new coffee and return 200 response and if something went wrong it will return 500 error.
     * `/random-coffee`: get random coffee.
   
* `Display Single Page`:
   * `/coffee-details/:coffeeId`: include details of a one coffee.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
