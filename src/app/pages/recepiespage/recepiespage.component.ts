import { Component } from '@angular/core';
import { FilterComponent } from 'src/app/components/filter/filter.component';
@Component({
  selector: 'app-recepiespage',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './recepiespage.component.html',
  styleUrl: './recepiespage.component.scss'
})
export class RecepiespageComponent {

}
