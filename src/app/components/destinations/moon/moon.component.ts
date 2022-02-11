import { Component, OnInit } from '@angular/core';
import {destinationsData} from 'src/main'

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {

  constructor() {

   }

  
   currentData = destinationsData[0];
   moonDescription = this.currentData.description;
   moonDistance = this.currentData.distance;
   moonTravelTime = this.currentData.travel;

  ngOnInit(): void {
  }

}
