import { Component, OnInit } from '@angular/core';
import { RecepiePageSkeletonComponent } from 'src/app/skeletons/recepie-page-skeleton/recepie-page-skeleton.component';

@Component({
  selector: 'app-recepie-page',
  standalone: true,
  imports: [ RecepiePageSkeletonComponent],
  templateUrl: './recepie-page.component.html',
  styleUrl: './recepie-page.component.scss'
})
export class RecepiePageComponent implements OnInit  {

  loading = true;


  ngOnInit(): void {
      setTimeout(() => {
        this.loading = false
      }, 3000)
  }


}
