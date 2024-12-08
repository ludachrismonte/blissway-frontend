import { Component } from '@angular/core';
import { ViolationService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: false
})
export class SearchComponent {

  violationNumber: string = '';
  state: string = '';
  licensePlate: string = '';

  constructor(private violationService: ViolationService) {}

  searchViolations() {
    if (this.violationNumber && this.state && this.licensePlate) 
    {
      console.log('Searching for violation with details:', {
        violationNumber: this.violationNumber,
        state: this.state,
        licensePlate: this.licensePlate
      });

      this.violationService.search(this.violationNumber, this.state, this.licensePlate);
    }
    else alert('Please fill in all fields.');
  }
}
