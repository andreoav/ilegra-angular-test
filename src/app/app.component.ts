import { Component } from '@angular/core';
import { Movie } from './movies/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  movies: Movie[] = [
    new Movie('Interestelar', 'Good Movie'),
    new Movie('IT (2017)', 'Awesome Movie'),
    new Movie('Central do Brazil', 'Awesome Movie'),
    new Movie('Central do Brazil', 'Awesome Movie'),
    new Movie('Central do Brazil', 'Awesome Movie'),
  ];
}
