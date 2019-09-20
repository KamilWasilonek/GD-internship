import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isMenuOpen = false;
  mobileIcon = faBars;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
