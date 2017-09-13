import { Component, OnInit } from '@angular/core';
import { Movie } from './movies/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  movies: Movie[];

  loadingMovies: boolean = false;

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.setLoading(true);

    setTimeout(() => {
      this.movies = [
        new Movie('Interestelar', 'Good Movie'),
        new Movie('IT (2017)', 'Awesome Movie'),
        new Movie('Central do Brazil 1', 'Awesome Movie'),
        new Movie('Central do Brazil 2', 'Awesome Movie'),
        new Movie('Central do Brazil 3', 'Awesome Movie'),
      ];

      this.setLoading(false);
    }, 2500);
  }

  setLoading(loading: boolean) {
    this.loadingMovies = loading;
  }
}
