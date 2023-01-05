import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListsComponent } from './dog-lists.component';

describe('DogListsComponent', () => {
  let component: DogListsComponent;
  let fixture: ComponentFixture<DogListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
