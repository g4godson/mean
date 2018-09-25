import { Injectable } from '@angular/core';

//extra
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

    addMovie(data){
      return this._http.post('/api/movie/add', data);
    }

    getAllMovies(){
    return this._http.get('/api/movies');
    }

    addReview(id, data){
        console.log("Http Id", id);
      return this._http.put('/api/movie/'+id,data);
    }

    getAllReviews(id){
        return this._http.get('/api/movie/'+id);
    }

    deleteMovie(id){
        return this._http.delete('/api/movie/'+id);
    }


}
