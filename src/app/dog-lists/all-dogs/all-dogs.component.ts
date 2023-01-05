import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-all-dogs',
  templateUrl: './all-dogs.component.html',
  styleUrls: ['./all-dogs.component.css'],
})
export class AllDogsComponent {
  @Input() dogNames: string[] = [];
  curDogNames: string[] = [];
  paginationIndex: number = 0;
  totalPages: number = 0;


  ngOnInit(): void {
  }

  updateVisibleResults() {   
    this.curDogNames = this.dogNames.slice(
      this.paginationIndex * 5,
      this.paginationIndex * 5 + 5
    );
  }

  ngOnChanges(changes: SimpleChanges) { // Only works for parent state changes
    for (const propName in changes) {
      if (propName === 'dogNames') {
        const curChangeObj = changes['dogNames'];
        if (curChangeObj.currentValue) {
          this.updateVisibleResults();
          this.totalPages = Math.ceil(this.dogNames.length / 5);
        }
      }
    }
  }

  changeIndex(indexChange: number) {
    this.paginationIndex = this.paginationIndex + indexChange;
    this.updateVisibleResults();
  }
}
