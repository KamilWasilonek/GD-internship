import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isMenuOpen: boolean;
  scrWidth: number;
  mobileScreenSize: number;

  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?) {
    this.scrWidth = window.innerWidth;
    this.changeMenuVisibility();
  }

  changeMenuVisibility() {
    if (this.scrWidth <= this.mobileScreenSize) {
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
    }
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor() {
    this.mobileScreenSize = 992;
    this.isMenuOpen = true;
    this.getScreenWidth();
    this.changeMenuVisibility();
  }

  ngOnInit() {}
}
