import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogApiCallService } from '../dog-api-call.service';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.css'],
})
export class DogPageComponent {
  curDogName: string | undefined;
  dogImages: string[] = [];
  imageIndex: number = 0;
  constructor(private route: ActivatedRoute, private dogs: DogApiCallService) {
    
  }


  ngOnInit(): void {
    const dogname = this.route.snapshot.paramMap.get('dogname');
    if (!dogname) throw new Error('could not get dog name from route params');
    this.curDogName = dogname;

    this.dogs.getDogImages(this.curDogName).subscribe((data) => {
      console.warn(data);
      console.log(data.message);
      this.dogImages = data.message;
    });
  }
}
