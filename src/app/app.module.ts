import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { LoadingComponent } from './ui/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieItemComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
