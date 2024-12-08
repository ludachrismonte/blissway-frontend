import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ViolationService } from "../../shared/services/search.service";
import { Subscription } from "rxjs";
import {Notice} from "../../shared/models/notice.interface";

@Component({
  selector: 'app-violations',
  templateUrl: './violations.component.html',
  styleUrl: './violations.component.scss',
  standalone: false
})
export class ViolationsComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  public notices: Notice[] = [];
  public paying: boolean = false;
  public disputing: boolean = false;
  
  constructor(
      private titleService: Title,
      private violationService: ViolationService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Violations');
    this.subscription.add(
        this.violationService.notices.subscribe(() => {
          this.notices = this.violationService.notices.value;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  onClickPay(): void {
    this.paying = true;
  }
  
  onClickDispute(): void {
    this.disputing = true;
  }
  
  onClickBack(): void {
    this.paying = false;
    this.disputing = false;
  }
  
  onClickLogOut(): void {
    this.paying = false;
    this.disputing = false;
    this.violationService.logOut();
  }
}