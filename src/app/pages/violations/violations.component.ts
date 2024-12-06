import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-violations',
  templateUrl: './violations.component.html',
  styleUrl: './violations.component.scss',
  standalone: false
})
export class ViolationsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Violations');
  }
}