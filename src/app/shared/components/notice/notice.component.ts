import { Component, Input } from '@angular/core';
import { Notice } from "../../models/notice.interface";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss',
  standalone: false
})
export class NoticeComponent {
  @Input() notice!: Notice;
  @Input() isExpanded: boolean = false;
}
