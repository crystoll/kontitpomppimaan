import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BeerService } from './beer.service';
import { Beer } from './beer';

@Component({
  selector: 'my-app',
  template: `<h1>SABS time!</h1>
<ul *ngFor="let beer of beers">
    <li [(ngModel)]="beer.brand"></li>
</ul>`,
})
export class AppComponent  implements OnInit {
  name = 'Angular';

  beers: Beer[];

  constructor(
      private beerService: BeerService
  ){}

  ngOnInit() {
    // Load comments
    this.loadBeers()
  }

  loadBeers() {
    // Get all comments
    this.beerService.getBeers()
        .subscribe(
            beers => this.beers = beers, //Bind to view
            err => {
              // Log errors if any
              console.log(err);
            });
  }
}
