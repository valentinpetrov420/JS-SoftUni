import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Movies } from "../models/movies";

const API_KEY = '012b6ac2e640aba3c5e762c2466db93c';

@Injectable()
export class MoviesService {
  path : string = 'https://api.themoviedb.org/3/';
  popular : string = 'discover/movie?sort_by=popularity.desc';
  theaters : string = 'discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22';
  kids : string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama : string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
  movie : string = 'movie/';
  authentication : string = '&api_key=';
  movieAuth : string = "?api_key=";

  constructor(private httpClient : HttpClient){  }

  getPopular() : Observable<Movies>{
    return this.httpClient.get<Movies>(`${this.path}${this.popular}${this.authentication}${API_KEY}`);
  }

  getTheaters() : Observable<Movies>{
    return this.httpClient.get<Movies>(`${this.path}${this.theaters}${this.authentication}${API_KEY}`);
  }

  getKids() : Observable<Movies>{
    return this.httpClient.get<Movies>(`${this.path}${this.kids}${this.authentication}${API_KEY}`);
  }

  getDrama() : Observable<Movies>{
    return this.httpClient.get<Movies>(`${this.path}${this.drama}${this.authentication}${API_KEY}`);
  }

  getMovie(id) {
    return this.httpClient.get(`${this.path}${this.movie}${id}${this.movieAuth}${API_KEY}`)
  }

  searchMovie(query){
    return this.httpClient.get('https://api.themoviedb.org/3/search/movie?query=' + query + this.authentication + API_KEY);
  }
}
