import { Component, OnInit } from '@angular/core';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { RecepieCardComponent } from 'src/app/components/recepie-card/recepie-card.component';
import { HomeSkeletonComponent } from 'src/app/skeletons/home-skeleton/home-skeleton.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeroComponent, RecepieCardComponent, HomeSkeletonComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  loading = true

  ngOnInit(): void {
      /* setTimeout(() => {
        this.loading = false
      }, 2000) */
  }

}
