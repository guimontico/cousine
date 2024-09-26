import { Component, Input, OnInit } from '@angular/core';
import { Meals } from '../../models/meals.model';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  templateUrl: './meal-list.component.html',
  providers: [],
})
export class MealListComponent implements OnInit {
  @Input() mealList: Meals | null = null;

  constructor() {}

  ngOnInit() {}
}
