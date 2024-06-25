import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from 'src/app/services/formService/form.service';

@Component({
  selector: 'app-diffuculty-filter',
  standalone: true,
  imports: [],
  templateUrl: './diffuculty-filter.component.html',
  styleUrl: './diffuculty-filter.component.scss'
})
export class DiffucultyFilterComponent {
  @Output() difficultySelected = new EventEmitter<{
    name: string;
    icon: string;
  }>();
  @Input() radio = false;
  constructor(public formService: FormService){}

}
