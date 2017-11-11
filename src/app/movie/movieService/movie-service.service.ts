import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MovieData } from '../movie-data';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieServiceService {
  private API_KEY = 'fa94a58f234a4e398c60d52117916451';
  private API_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
  
  constructor(private _http: HttpClient) { }

   getMovies(): Observable<MovieData[]> {
     return this._http.get<MovieData[]>(this.API_URL + '?api-key=' + this.API_KEY)
     .do(data => JSON.stringify(data))
     .catch(this.handleError);
   }

   getProduct(index: number): Observable<MovieData> {
    return this.getMovies()
     .map((products: MovieData[]) => products.results.find((p, i) => i === index));

}

   private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
}
}
