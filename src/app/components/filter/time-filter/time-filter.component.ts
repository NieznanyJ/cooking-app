import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from 'src/app/services/formService/form.service';

@Component({
  selector: 'app-time-filter',
  standalone: true,
  imports: [],
  templateUrl: './time-filter.component.html',
  styleUrl: './time-filter.component.scss'
})
export class TimeFilterComponent {
  @Input() radio = false;
  @Output() timeSelected = new EventEmitter<{ name: string; icon: string }>();


  constructor(public formService: FormService){}

}
