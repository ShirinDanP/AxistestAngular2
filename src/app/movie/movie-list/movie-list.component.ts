import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieServiceService } from '../movieService/movie-service.service';
import { MovieData } from '../movie-data';
import { Router } from '@angular/router';

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
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.movies['results'];
  }

  constructor(private _movieService: MovieServiceService,
  private _router: Router) {}

  ngOnInit(): void {
    this._movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.filteredProducts = this.movies['results'];
    }, error => (this.errorMessage = <any>error));
  }
  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): MovieData[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies['results'].filter(
      movie => movie.display_title.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  addForm (){
    this._router.navigate(['/movieForm']);
  }

}
