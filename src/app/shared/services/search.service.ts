import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { Notice } from "../models/notice.interface";
import { notices } from "../globals/notices.global";

@Injectable({
  providedIn: 'root'
})
export class ViolationService {
  
  private apiUrl = 'https://example.com/api/search';

  public notices: BehaviorSubject<Notice[]> = new BehaviorSubject<Notice[]>([]);
  
  constructor(private http: HttpClient) {
    this.notices.next(notices);
  }

  search(violationNumber: string, state: string, licensePlate: string) {
    const params = {
      violationNumber,
      state,
      licensePlate
    };
    this.notices.next(notices);
  }
  
  logOut() {
    this.notices.next([]);
  }
}