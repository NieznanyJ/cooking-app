import { Component, OnInit } from '@angular/core';
import { RecepiePageSkeletonComponent } from 'src/app/skeletons/recepie-page-skeleton/recepie-page-skeleton.component';
import { CreateRecepieFormComponent } from 'src/app/components/create-recepie-form/create-recepie-form.component';

@Component({
  selector: 'app-recepie-page',
  standalone: true,
  imports: [ RecepiePageSkeletonComponent, CreateRecepieFormComponent],
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
