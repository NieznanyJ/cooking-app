import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { RatingFilterComponent } from './rating-filter/rating-filter.component';
import { LikesFilterComponent } from './likes-filter/likes-filter.component';
import { DiffucultyFilterComponent } from './diffuculty-filter/diffuculty-filter.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TimeFilterComponent } from './time-filter/time-filter.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    CategoryFilterComponent,
    RatingFilterComponent,
    LikesFilterComponent,
    DiffucultyFilterComponent,
    SearchbarComponent,
    TimeFilterComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() showCategories = false;
  @Input() showRating = false;
  @Input() showLikes = false;
  @Input() showDifficulty = false;
  @Input() showTime = false;
  @Input() sticky = false;
  
  

  constructor() {}

  
}
