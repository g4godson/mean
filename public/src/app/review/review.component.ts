import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
    movieId: any;
    allReviews: any;
    movie: String;
  constructor(private _httpService: HttpService,
                private _route: ActivatedRoute,
                private _router: Router) { }

  ngOnInit() {
      this._route.params.subscribe((params: Params) =>{ console.log("Movie ID", params['id']);
       this.movieId = params['id']})

       this.getAllReviews();
  }

  getAllReviews(){
      let obs = this._httpService.getAllReviews(this.movieId);
      obs.subscribe( data => {
          this.movie = data['data']['title'];
        this.allReviews = data['data']['reviews'];
        console.log("All Reviews",this.allReviews);
    })
  }

  deleteMovie(){
      let obs = this._httpService.deleteMovie(this.movieId);
      obs.subscribe( data => console.log("Deleted", data))
      this._router.navigate(['/']);

  }
}
