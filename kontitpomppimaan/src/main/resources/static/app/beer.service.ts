import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Beer}           from './beer';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BeerService {
    // Resolve HTTP using the constructor
    constructor(private http: Http) {
    }

    // private instance variable to hold base url
    private beersUrl = 'http://localhost:8080/api/beers';

    // Fetch all existing beer
    getBeers(): Observable<Beer[]> {
        return this.http.get(this.beersUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    // Create a new beer (never too much!)
    createBeer(body: Object): Observable<Beer[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.beersUrl, bodyString, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Update a beer
    updateBeer(body: Object): Observable<Beer[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.put(`${this.beersUrl}/${body['id']}`, bodyString, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Delete a beer (Boooooo!)
    removeBeer(id: string): Observable<Beer[]> {
        return this.http.delete(`${this.beersUrl}/${id}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}