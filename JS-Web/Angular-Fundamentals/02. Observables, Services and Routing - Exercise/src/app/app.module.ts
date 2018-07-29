//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from "@angular/router";
import { FormsModule } from "@angular/forms";

//Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NavbarComponent } from './navbar/navbar.component';

//Services
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //{'/Path', component}
      { path: '', component: MoviesComponent },
      { path: 'movie/:id', component: MovieDetailsComponent }
    ]),

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
