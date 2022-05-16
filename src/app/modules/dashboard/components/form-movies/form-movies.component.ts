import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, switchMap } from "rxjs/operators";
import { MoviesService } from "@app-services/movies.service";

@Component({
  selector: "app-form-movies",
  templateUrl: "./form-movies.component.html",
  styleUrls: ["./form-movies.component.scss"],
})
export class FormMoviesComponent implements OnChanges, OnInit {
  @Input() searching: boolean;
  @Output() searchMovieEmitter = new EventEmitter<string>();
  movieTitle: FormControl;

  constructor(private moviesService: MoviesService) {
    this.movieTitle = new FormControl("");
    this.searching = false;
  }

  searchMovie() {
    this.searchMovieEmitter.emit(this.movieTitle.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
    if (changes.searching) {
      this.searching = changes.searching.currentValue;
    }
  }

  ngOnInit(): void {
    this.movieTitle.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((data) => {
          return this.moviesService.getMovieList(data);
        })
      )
      .subscribe((data) => {
        console.log("data", data);
      });
  }
}
