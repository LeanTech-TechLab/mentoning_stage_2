import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormMoviesComponent } from "./form-movies.component";

describe("FormMoviesComponent", () => {
  let component: FormMoviesComponent;
  let fixture: ComponentFixture<FormMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormMoviesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
