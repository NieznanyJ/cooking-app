import { Component, EventEmitter, Output } from '@angular/core';
import { FormService} from 'src/app/services/formService/form.service';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss',
})
export class CategoryFilterComponent {
  @Output() categorySelected = new EventEmitter<{
    name: string;
    icon: string;
  }>();

  constructor(public formService: FormService){}


  
}
