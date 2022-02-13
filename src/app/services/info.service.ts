import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InfoService {

  
  constructor() { }

  testData: string[] = ["Blow","Hard","Yay"]
  testPlanet: string[] = ["Cheese", "Uranus", "Pluto"]

  getData1(): string[]{
    return this.testData;
  }
  getData2(): string[] {
    return this.testPlanet;
  }
}


