import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  standalone: false
})
export class FaqComponent {
  @Input() question!: string;
  @Input() answer!: string;
  @Input() isExpanded: boolean = false;
}
