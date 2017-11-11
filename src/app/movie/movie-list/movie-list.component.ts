import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieServiceService } from '../movieService/movie-service.service';
import { MovieData } from '../movie-data';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent implements OnInit {
pageTitle: 'Movie List';
showImage: boolean = true;
movies: MovieData[] = [];
errorMessage: string;
listFilter: '';

  constructor(private _movieService: MovieServiceService) { }

  ngOnInit(): void {
  this._movieService.getMovies()
  .subscribe(movies => {
   this.movies = movies;
  },
  error => this.errorMessage = <any>error);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
}

}
