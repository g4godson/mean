import { Component, OnInit } from '@angular/core';

//extra
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _httpService: HttpService,
                private _router: Router) { }

    newMovie: any;
    errors = {};
  ngOnInit() {
      this.newMovie = {title: "", stars : 0, name: "", review: "" };
  }

  addMovie( ){
    let obs = this._httpService.addMovie(this.newMovie)
    obs.subscribe( data => {
        console.log("Validation errors", data);
        if(data['message'] == "Success"){
            this._router.navigate(['/movies']);
        }else if(data['message'] == "custom"){
            this.errors = data['data'];

        }

        else{

            this.errors = data['data']['errors'];
            this.newMovie= {title: "", name: "", review: "" };
            console.log("From create Error:",this.errors);

        }



        })

  }

}
