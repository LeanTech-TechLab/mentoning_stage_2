import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-form-movies",
  templateUrl: "./form-movies.component.html",
  styleUrls: ["./form-movies.component.scss"],
})
export class FormMoviesComponent implements OnChanges {
  @Input() searching: boolean;
  @Output() searchMovieEmitter = new EventEmitter<string>();
  movieTitle: string;

  constructor() {
    this.movieTitle = "";
    this.searching = false;
  }

  searchMovie() {
    this.searchMovieEmitter.emit(this.movieTitle);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
    if (changes.searching) {
      this.searching = changes.searching.currentValue;
    }
  }
}
