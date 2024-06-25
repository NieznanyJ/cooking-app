import { Component, OnInit } from '@angular/core';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { RecepieCardComponent } from 'src/app/components/recepie-card/recepie-card.component';
import { HomeSkeletonComponent } from 'src/app/skeletons/home-skeleton/home-skeleton.component';
import { SearchbarComponent } from 'src/app/components/filter/searchbar/searchbar.component';
import { LikesFilterComponent } from 'src/app/components/filter/likes-filter/likes-filter.component';
import { RatingFilterComponent } from 'src/app/components/filter/rating-filter/rating-filter.component';
import { DiffucultyFilterComponent } from 'src/app/components/filter/diffuculty-filter/diffuculty-filter.component';
import { CategoryFilterComponent } from 'src/app/components/filter/category-filter/category-filter.component';
import { TimeFilterComponent } from 'src/app/components/filter/time-filter/time-filter.component';
@Component({
  selector: 'app-recepiespage',
  standalone: true,
  imports: [
    FilterComponent,
    RecepieCardComponent,
    HomeSkeletonComponent,
    SearchbarComponent,
    LikesFilterComponent,
    RatingFilterComponent,
    DiffucultyFilterComponent,
    CategoryFilterComponent,
    TimeFilterComponent,
  ],
  templateUrl: './recepiespage.component.html',
  styleUrl: './recepiespage.component.scss',
})
export class RecepiespageComponent implements OnInit {
  counter = Array.from({ length: 30 });
  loading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
