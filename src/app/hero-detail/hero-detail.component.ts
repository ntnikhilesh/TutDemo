import { Component, OnInit , Input } from '@angular/core';
import { Hero } from './../models/hero';

import {ActivatedRoute,Params} from '@angular/router';

import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {HeroService} from './../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
/* Declare Input above, import class Hero and declare hero variable that hold selected hero id to use in hero-detail.component.html  */


@Input()
hero:Hero;


  constructor(private heroService:HeroService,
  private route:ActivatedRoute,
  private location:Location) { }

  ngOnInit() {
  this.route.params.switchMap((params:Params)=>
  this.heroService.getHero(+params['id']))
  .subscribe(hero=>this.hero=hero);
  }


  goBack()
  {
  this.location.back();
  }

}
