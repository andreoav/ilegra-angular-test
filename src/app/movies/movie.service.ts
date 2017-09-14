import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class MovieService {
  constructor(private http: Http) {}

  getMovies() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get('https://swapi.co/api/films', { headers });
  }
}
