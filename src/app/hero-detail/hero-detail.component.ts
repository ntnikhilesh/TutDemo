import { Component, OnInit , Input } from '@angular/core';
import { Hero } from './../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
/* Declare Input above, import class Hero and declare hero variable that hold selected hero id to use in hero-detail.component.html  */
@Input()
hero:Hero;
  constructor() { }

  ngOnInit() {
  }

}
