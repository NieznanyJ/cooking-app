import { Component } from '@angular/core';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { RecepieCardComponent } from 'src/app/components/recepie-card/recepie-card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeroComponent, RecepieCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
