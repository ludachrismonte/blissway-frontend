import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent implements OnInit{

  activeRoute: string = '';

  readonly violations: string = "/violations";
  readonly about: string = "/about";
  readonly faqs: string = "/faqs";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activeRoute = this.router.url;
  }
  
  navigateToViolations() {
    this.router.navigate([this.violations]);
  }

  navigateToAbout() {
    this.router.navigate([this.about]);
  }

  navigateToFAQs() {
    this.router.navigate([this.faqs]);
  }
}
