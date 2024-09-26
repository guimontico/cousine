import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideComponentStore } from '@ngrx/component-store';
import { MealStore } from '../state/meal.store';
import { MealListComponent } from '../components/meal-list/meal-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [ReactiveFormsModule, FormsModule, MealListComponent, AsyncPipe],
  providers: [],
})
export class HomeComponent implements OnInit {
  search = new FormControl('', { nonNullable: true });

  private readonly mealStore = inject(MealStore);
  readonly mealList$ = this.mealStore.meals$;
  loading: boolean = false;
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.mealList$.subscribe({
      next: (value) => {
        this.loading = false;
      },
      error: (err) => console.error(err),
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  searchMeal() {
    this.loading = true;
    this.mealStore.searchMeals$(this.search.value);
  }
}
