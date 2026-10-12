import { Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private lastClickTime = 0;
  isNavMenuOpen = signal(false);

  toggleMenu(event: Event) {
    //to keep the menu button from double clicking on phone due to ghost clicking.
    const currentTime = Date.now();
    if (currentTime - this.lastClickTime < 300) {
      return;
    }

    this.lastClickTime = currentTime;
    this.isNavMenuOpen.update(open => !open);
    //console.log('Toggle at:', this.lastClickTime, ' Toggled to:', this.isNavMenuOpen());
  }

  // Always closes menu
  closeMenu() {
    this.isNavMenuOpen.set(false);
  }
}