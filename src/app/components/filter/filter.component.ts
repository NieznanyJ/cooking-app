import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() showCategories = false;
  @Input() showRating = false;
  @Input() showLikes = false;
  @Input() showDifficulty = false;
  @Input() showTime = false;
  @Output() categorySelected = new EventEmitter<{ name: string, icon: string }>();
  @Output() difficultySelected = new EventEmitter<{ name: string, icon: string }>();
  @Output() timeSelected = new EventEmitter<{ name: string, icon: string }>();


  constructor() {}

  toggleFilter(event: MouseEvent, filterType: string): void {
    const target = event.target as HTMLElement;
    const iconElement = target.querySelector('i');
    const iconClass = iconElement ? iconElement.className : '';
    const textContent = target.textContent?.trim() || '';

    switch (filterType) {
      case 'category':
        this.categorySelected.emit({ name: textContent, icon: iconClass });
        break;
      case 'difficulty':
        this.difficultySelected.emit({ name: textContent, icon: iconClass });
        break;
      case 'time':
        this.timeSelected.emit({ name: textContent, icon: iconClass });
        break;
      default:
        console.error('Invalid filter type');
        break;
    }
  }
}
