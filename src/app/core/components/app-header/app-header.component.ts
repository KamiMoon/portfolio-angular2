import { Component, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

  isCollapsed = true;

  constructor() { }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
