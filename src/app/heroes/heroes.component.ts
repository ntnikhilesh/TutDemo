import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import { Hero } from './../models/hero';

import { HeroService } from './../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

   title = 'Tour of heroes';
//Initializing array object using service class

heroes:Hero[];


//Handle on click event of Hero list item
selectedHero:Hero;

constructor(
private heroService:HeroService,
private router:Router
)
{
	
}

ngOnInit():void{
	this.getHeroes();
} 

getHeroes():void
{
this.heroService.getHeroes().then(heroes => this.heroes=heroes);
	
} 

  onSelect(hero:Hero):void {
  this.selectedHero=hero;
  }

goToDetail()
{
	 this.router.navigate(['/detail',this.selectedHero.id]);
}

}
