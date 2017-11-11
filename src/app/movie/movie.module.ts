import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MovieServiceService} from '../movie/movieService/movie-service.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'moviesList', component: MovieListComponent },
      { path: 'moviesList/:title', component: MovieDetailComponent }
  ]),
  ],
  declarations: [
    MovieDetailComponent,
    MovieListComponent],
    providers: [
      MovieServiceService
    ]
})
export class MovieModule { }
