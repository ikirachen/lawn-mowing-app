LawnMowingApp

The purpose of the application is the automation of lanw mowing rectangular surfaces. The mower can be programmed to mow the entire surface.The position of the mower can be represented by coordinates (x,y) and by a letter giving the cardinal direction (N,E,W,S). The lawn is divided into a grid to simplify the navigation. For example, a mower position can be « 0, 0, N », it means that this mower is located at the lower-left corner of the lawn, and it is oriented North. The mower is controlled by sending it a sequence of letters. Possible letters are « R », « L » and « F ». « R » and « L » make the mower rotate of 90° respectively to the left or to the right, without moving. « F » means that the mower is moving forward on the cell in front of it, without changing its orientation. If the position after the move is outside the lawn, then the mower do not move, it keeps its orientation and process the next command.

The current version of the application supports parsing commands given via file with the following format:
Example:  
 5 5  
 1 2 N  
 LFLFLFLFF  
 3 3 E  
 FFRFFRFRRF
 
And outputs file which represents the final position of the mowers with the following format:
Example:  
1 3 N  
5 1 E  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
