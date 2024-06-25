import { Component } from '@angular/core';
import { SearchbarComponent } from '../filter/searchbar/searchbar.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
