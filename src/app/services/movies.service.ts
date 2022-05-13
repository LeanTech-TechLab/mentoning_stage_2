import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "@environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getMovieList(query: string): Observable<any> {
    const url = `${environment.URL}/?s=${query}&apikey=${environment.OMDB_APIKEY}`;
    return this.http.get<any>(url);
  }
}
