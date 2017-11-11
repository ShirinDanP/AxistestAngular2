import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieServiceService } from '../movieService/movie-service.service';
import { MovieData } from '../movie-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent implements OnInit {
movie: MovieData;
errorMessage: String;
pageTitle: string = 'Movie Short Summary';

  constructor(private _service: MovieServiceService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
     const id = +param;
     this.getMovie(id);
    }
  }
  getMovie(id: number) {
    this._service.getMovie(id).subscribe(
      product => this.movie = product,
      error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this._router.navigate(['/movieList']);
  }
}
