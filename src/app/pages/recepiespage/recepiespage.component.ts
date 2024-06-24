import { Component, OnInit } from '@angular/core';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { RecepieCardComponent } from 'src/app/components/recepie-card/recepie-card.component';
import { HomeSkeletonComponent } from 'src/app/skeletons/home-skeleton/home-skeleton.component';
@Component({
  selector: 'app-recepiespage',
  standalone: true,
  imports: [FilterComponent, RecepieCardComponent, HomeSkeletonComponent],
  templateUrl: './recepiespage.component.html',
  styleUrl: './recepiespage.component.scss'
})
export class RecepiespageComponent implements OnInit {
  counter = Array.from({length: 30})
  loading = true

  ngOnInit(): void {
      setTimeout(() => {
        this.loading = false
      }, 3000)
  }
}
