import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {

  constructor() { }

  toggleFilter(
    event: MouseEvent,
    emmiter: EventEmitter<{
      name: string;
      icon: string;
    }>
  ): void {
    const target = event.currentTarget as HTMLElement; // Change to currentTarget to ensure you get the correct element
    const iconElement = target.querySelector('i');
    const iconClass = iconElement ? iconElement.className : '';
    const textContent = target.textContent?.trim() || '';
    emmiter.emit({ name: textContent, icon: iconClass });

  }
}
