import { Component } from '@angular/core';
import { DogApiCallService } from '../dog-api-call.service';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.css'],
})
export class PreviewImageComponent {
  title = 'preview-image-title';
  randomImage!: string;
  // constructor(private dogs: DogApiCallService) {
  //   this.dogs.getRandomImage('hound').subscribe((data) => {
  //     console.warn(data);
  //     console.log(data.message);
  //     this.randomImage = data.message;
  //   });
  // }
  constructor() {
    this.randomImage =
      'https://images.dog.ceo/breeds/hound-english/n02089973_3426.jpg';
  }
}
