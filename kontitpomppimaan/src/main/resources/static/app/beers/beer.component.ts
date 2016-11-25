import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BeerService } from './beer.service';
import { Beer } from '../models/beer';

@Component({
    selector: 'beer',
    providers: [BeerService],
    template: `<h1>SABS time!</h1>
<ul>
  <li *ngFor="let beer of beers">
    {{beer.brand}}
  </li>
</ul>`,
})
export class BeerComponent  implements OnInit {
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
