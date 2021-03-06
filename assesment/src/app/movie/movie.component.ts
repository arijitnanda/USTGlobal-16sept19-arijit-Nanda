import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies;
  movie: any;
  constructor(public http: HttpClient) {}
  get(event) {
    this.movie = event.target.value;
    this.http.get<any>('http://www.omdbapi.com/?apikey=39aa29e9&s=' + this.movie).subscribe(data => {
      this.movies = data.Search;
      console.log(data);
    }, err => {
      console.log(err);
    }, () => {
      console.log('movies got succesfully');
    });
  }
  ngOnInit() {
  }

}

