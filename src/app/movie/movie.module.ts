import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MovieServiceService } from '../movie/movieService/movie-service.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'moviesList/:id', component: MovieDetailComponent },
      { path: 'movieForm', component: MovieFormComponent }
  ]),
  ],
  declarations: [
    MovieDetailComponent,
    MovieListComponent,
    MovieFormComponent],
    providers: [
      MovieServiceService
    ]
})
export class MovieModule { }
