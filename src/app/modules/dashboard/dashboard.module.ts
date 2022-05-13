import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { MoviesTableComponent } from "./components/movies-table/movies-table.component";
import { FormMoviesComponent } from "./components/form-movies/form-movies.component";
import { AngularMaterialModule, FormsModule } from "@shared/index";
import { FavoriteShowsComponent } from "./components/favorite-shows/favorite-shows.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DashboardComponent,
    MoviesTableComponent,
    FormMoviesComponent,
    FavoriteShowsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
