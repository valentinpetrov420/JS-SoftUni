import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from '../services/movies.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie;
  constructor(private route: ActivatedRoute, private MoviesService: MoviesService, private titleService: Title) { }

  ngOnInit() {
    this.route.params
      .subscribe((param) => {
      let id = param['id'];
        this.MoviesService
          .getMovie(id)
          .subscribe(data => {
            this.movie = data;
            console.log(this.movie);
            this.titleService.setTitle( this.movie.original_title );
          })
      })
  }

}
