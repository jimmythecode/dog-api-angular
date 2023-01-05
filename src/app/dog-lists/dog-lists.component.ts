import { Component } from '@angular/core';
import { DogApiCallService } from '../dog-api-call.service';

@Component({
  selector: 'app-dog-lists',
  templateUrl: './dog-lists.component.html',
  styleUrls: ['./dog-lists.component.css'],
})
export class DogListsComponent {
  menuLabels = ['All Dogs', 'Rated Dogs', 'Favourite Dogs'];
  currentLabel = this.menuLabels[0];
  navButtonClicked(label: typeof this.menuLabels[number]) {
    this.currentLabel = label;
  }
  getDogNames!: string[];

  constructor(private dogs: DogApiCallService) {
    this.dogs.getAllDogs().subscribe((data) => {
      this.getDogNames = Object.keys(data.message);
    });
  }
}
