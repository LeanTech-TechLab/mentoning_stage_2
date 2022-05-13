import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { MovieInterface } from "@app-models/movie.model";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-movies-table",
  templateUrl: "./movies-table.component.html",
  styleUrls: ["./movies-table.component.scss"],
})
export class MoviesTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ["Title", "Type", "Year", "Action"];
  dataSource: MovieInterface[];
  movieForm: FormGroup;
  @Input() movieList: MovieInterface[];
  @Output() selectMovieEmitter = new EventEmitter<MovieInterface>();
  constructor(private fb: FormBuilder) {
    this.dataSource = [];
    this.movieList = [];
    this.movieForm = this.fb.group({
      movies: this.fb.array([]),
    });
  }

  get getMovieList() {
    return this.movieForm.get("movies") as FormArray;
  }

  ngOnInit(): void {
    this.dataSource = this.movieList;
  }

  selectMovie(movie: MovieInterface) {
    this.selectMovieEmitter.emit(movie);
  }

  addMovie(movieData: MovieInterface) {
    return this.fb.group({
      title: [movieData.Title],
      type: [movieData.Type],
      year: [movieData.Year],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movieList) {
      this.dataSource = changes.movieList.currentValue;
      this.dataSource.forEach((element) => {
        console.log("element", element);
        this.getMovieList.push(this.addMovie(element));
      });
    }
  }

  verFormulario() {
    console.log("form", this.movieForm);
  }
}
