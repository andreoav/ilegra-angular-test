import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Movie } from './movies/movie.model';
import { MovieService } from './movies/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  movies: any[];

  loadingMovies: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.setLoading(true);
    this.movieService.getMovies().subscribe(
      (response: Response) => {
        this.movies = response.json().results;
        this.setLoading(false);
      },
      (error) => console.log(error)
    );
  }

  setLoading(loading: boolean) {
    this.loadingMovies = loading;
  }
}
