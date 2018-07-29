import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../services/movies.service";
import { Movie } from "../models/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular : Object;
  theaters : Object;
  constructor(private MoviesService : MoviesService) { }

  ngOnInit() {
    this.MoviesService
      .getPopular()
      .subscribe(data =>  {
        this.popular = data;
        console.log(data);
      });
    this.MoviesService
      .getTheaters()
      .subscribe(data =>  {
        this.theaters = data;
        console.log(data);
      })
  }
}
