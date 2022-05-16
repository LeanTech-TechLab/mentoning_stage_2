import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
  movieForm: FormGroup;

  constructor(private moviesService: MoviesService, private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: ["", Validators.required],
      subTitle: [""],
      age: [""],
      year: [""],
    });
    this.searching = false;
  }

  get getTitle() {
    return this.movieForm.get("title");
  }

  /*get getSubTitle() {
    return this.movieForm.get('subTitle')
  }*/

  searchMovie() {
    // this.getTitle.patchValue('Game of thrones');
    // this.getSubTitle.patchValue('Test');
    // this.movieForm.patchValue({title: '1', subTitle: '2', age: '3'})
    this.searchMovieEmitter.emit(this.getTitle.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
    if (changes.searching) {
      this.searching = changes.searching.currentValue;
    }
  }

  ngOnInit(): void {
    this.movieForm.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((data) => {
          return this.moviesService.getMovieList(data);
        })
      )
      .subscribe((data) => {
        console.log("valuechanges formulario completo", data);
      });
    /*this.getTitle.valueChanges.subscribe(data=> {
      console.log('data', data);
    })*/
  }
}
