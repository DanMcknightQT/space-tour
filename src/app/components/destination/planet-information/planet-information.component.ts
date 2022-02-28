import { Component, OnInit } from '@angular/core';
import { destinationsData } from 'src/main';

@Component({
  selector: 'app-planet-information',
  templateUrl: './planet-information.component.html',
  styleUrls: ['./planet-information.component.css']
})
export class PlanetInformationComponent implements OnInit {

  constructor() { }
  
  currentData = destinationsData[0];
  planetName = this.currentData.name
  planetDescription = this.currentData.description
  planetDistance = this.currentData.distance
  planetTravelTime = this.currentData.travel
  planetImage = this.currentData.images.png

  ngOnInit(): void {
  }

  getData(data: any){
    if(data){
      this.currentData = data
    }
    this.planetName = this.currentData.name;
    this.planetDescription = this.currentData.description
    this.planetDistance = this.currentData.distance
    this.planetTravelTime = this.currentData.travel
    this.planetImage = this.currentData.images.png
  }

}
