import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViolationService {
  
  private apiUrl = 'https://example.com/api/search';

  private dummyResponse = {
    violationNumber: '12345',
    state: 'NY',
    licensePlate: 'ABC123'
  };
  
  constructor(private http: HttpClient) {}

  search(violationNumber: string, state: string, licensePlate: string): Observable<any> {
    const params = {
      violationNumber,
      state,
      licensePlate
    };

    return of(this.dummyResponse);
    //return this.http.get<any>(this.apiUrl, { params });
  }
}