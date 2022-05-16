import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "@environments/environment";
import { HttpClient } from "@angular/common/http";
import { MovieInfoInterface, MovieListResponse } from "@app-models/movie.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getMovieList(query: string): Observable<MovieListResponse> {
    const url = `${environment.URL}/?s=${query}&apikey=${environment.OMDB_APIKEY}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        console.log("data", data);
        data.Search?.map((element: MovieInfoInterface) => {
          return Object.assign(element, { favorite: false });
        });
        data.Response = data.Response === "True";
        return data;
      })
    );
  }
}
