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
  showImage: boolean = true;
  movies: MovieData[] = [];
  filteredProducts: MovieData[];
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : (<any>this).movies.results;
  }

  constructor(private _movieService: MovieServiceService) {}

  ngOnInit(): void {
    this._movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.filteredProducts = (<any>this).movies.results;
    }, error => (this.errorMessage = <any>error));
  }
  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): MovieData[] {
    filterBy = filterBy.toLocaleLowerCase();
    return (<any>this).movies.results.filter(
      movie => movie.display_title.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
