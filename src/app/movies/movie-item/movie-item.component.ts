import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
