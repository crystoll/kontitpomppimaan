"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var beer_service_1 = require('./beer.service');
var BeerListComponent = (function () {
    function BeerListComponent(beerService) {
        this.beerService = beerService;
        this.name = 'Angular';
    }
    BeerListComponent.prototype.ngOnInit = function () {
        // Load comments
        this.loadBeers();
    };
    BeerListComponent.prototype.loadBeers = function () {
        var _this = this;
        // Get all comments
        this.beerService.getBeers()
            .subscribe(function (beers) { return _this.beers = beers; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    BeerListComponent = __decorate([
        core_1.Component({
            selector: 'beerlist',
            providers: [beer_service_1.BeerService],
            template: "<h1>SABS time!</h1>\n<ul>\n  <li *ngFor=\"let beer of beers\">\n    {{beer.brand}}\n  </li>\n</ul>",
        }), 
        __metadata('design:paramtypes', [beer_service_1.BeerService])
    ], BeerListComponent);
    return BeerListComponent;
}());
exports.BeerListComponent = BeerListComponent;
//# sourceMappingURL=beerlist.component.js.map