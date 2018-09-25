import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
    newReview = {name: "" , review: "" }
    movieId: any;
    movieName: String;
    errors = {}
  constructor(private _httpService: HttpService,
                private _route: ActivatedRoute,
                private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{ console.log("Movie ID", params['id']);
    this.movieId = params['id']})
    this.getMovie();
    this.errors = {}
  }

  getMovie(){
      let obs = this._httpService.getAllReviews(this.movieId);
        obs.subscribe( data => {
            this.movieName = data['data']['title'];
        } )

  }
  addReview(){
    console.log("Movie ID", this.movieId)
    let obs = this._httpService.addReview(this.movieId, this.newReview);
    obs.subscribe( data => {
        if(data['message'] == "Success"){
            this._router.navigate(['/']);
        }
        else{
            this.errors = data['data']['errors'];
            console.log("Review error ", this.errors);
        }

    })

  }

}
