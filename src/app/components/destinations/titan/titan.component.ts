import { Component, OnInit } from '@angular/core';
import {destinationsData} from 'src/main'

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.css']
})
export class TitanComponent implements OnInit {

  constructor() { }

  currentData = destinationsData[3];
  titanDescription = this.currentData.description;
  titanDistance = this.currentData.distance;
  titanTravelTime = this.currentData.travel;

  ngOnInit(): void {
  }

}
