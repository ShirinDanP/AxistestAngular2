import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MovieModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'moviesList', component: MovieListComponent },
      { path: '', redirectTo: 'moviesList', pathMatch: 'full'},
      { path: '**', redirectTo: 'moviesList', pathMatch: 'full'}
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
