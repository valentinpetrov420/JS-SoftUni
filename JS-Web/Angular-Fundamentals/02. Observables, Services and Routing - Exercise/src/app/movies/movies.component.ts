import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theaters: Object;
  drama: Object;
  kids: Object;
  searchResults: any;
  ifResults: boolean;

  constructor(private MoviesService: MoviesService, private titleService: Title) {
  }

  search(searchArgs) {
    let searchValue = searchArgs['search'];
    this.MoviesService.searchMovie(searchValue)
      .subscribe(data => {
        this.searchResults = data;
        if (this.searchResults.results.length > 0) {
          this.ifResults = true;
        }
      });
  }

  ngOnInit() {
    this.titleService.setTitle('MovieDB');
    this.MoviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;
      });
    this.MoviesService
      .getTheaters()
      .subscribe(data => {
        this.theaters = data;
      });
    this.MoviesService
      .getKids()
      .subscribe(data => {
        this.kids = data;
      });
    this.MoviesService
      .getDrama()
      .subscribe(data => {
        this.drama = data;
      });
  }
}
