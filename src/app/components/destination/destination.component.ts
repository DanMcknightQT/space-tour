import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  displayPlanet = "Moon"  
	handlePlanetSelect(planet: string){
	  this.displayPlanet = planet  
	}
  

  constructor() { }

  ngOnInit(): void {
  }

}
