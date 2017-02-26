import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';

  //Creating object of clss Hero
  hero:Hero={
 
  id:101,
   name:"Ravi"
  }
}
// creating class 
export class Hero{
id:number;
	name:string;
	

}