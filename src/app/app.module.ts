import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MealStore } from './state/meal.store';
import { MealsService } from './service/meals.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {})
  ],
  providers: [MealStore, MealsService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
