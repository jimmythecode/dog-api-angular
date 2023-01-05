import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDogImagesResponse, GetDogResponse, GetRandomImageResponse } from './dogresponse';
@Injectable({
  providedIn: 'root',
})
export class DogApiCallService {
  constructor(private http: HttpClient) {}
  // https://dog.ceo/dog-api/documentation/breed
  getDogImages(breedName: string) {
    const url = `https://dog.ceo/api/breed/${breedName}/images/random/5`;
    return this.http.get<GetDogImagesResponse>(url);
  }
  getAllDogs() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    return this.http.get<GetDogResponse>(url);
  }
  getRandomImage(curBreed: string) {
    const url = `https://dog.ceo/api/breed/${curBreed}/images/random`;
    // https://dog.ceo/api/breed/hound/images/random
    return this.http.get<GetRandomImageResponse>(url);
  }
}
