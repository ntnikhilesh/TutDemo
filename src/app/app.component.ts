/*  Start of adding multiple component */


import { Component } from '@angular/core';
import { Hero } from './models/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'Tour of heroes';
//Initializing array object

heroes:Hero[]=HEROES;


//Handle on click event of Hero list item
selectedHero:Hero;
  onSelect(hero:Hero):void {
  this.selectedHero=hero;
  }


//Creating object of class Hero
 //hero:Hero={
 
  //id:101,
  // name:"Ravi"
  //}; 


  

 
}






//Crreating array of class object

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];




/*  End of adding multiple component */


/* Start of adding heroes in array and handling their click events */

/*import { Component } from '@angular/core'; */
/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'Tour of heroes';
//Initializing array object

heroes:Hero[]=HEROES;


//Handle on click event of Hero list item
selectedHero:Hero;
  onSelect(hero:Hero):void {
  this.selectedHero=hero;
  }


//Creating object of class Hero
 //hero:Hero={
 
  //id:101,
  // name:"Ravi"
  //}; 


  

 
}




// creating class 
 export class Hero{
	id:number;
	name:string;
	

}  

//Crreating array of class object

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

*/


/* End of adding heroes in array and handling their click events */





