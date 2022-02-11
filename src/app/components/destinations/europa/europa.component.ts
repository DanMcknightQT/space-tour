import { Component, OnInit } from '@angular/core';
import {destinationsData} from 'src/main'

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.css']
})
export class EuropaComponent implements OnInit {

  constructor() { }

  currentData = destinationsData[2];
  europaDescription = this.currentData.description;
  europaDistance = this.currentData.distance;
  europaTravelTime = this.currentData.travel;

  ngOnInit(): void {
  }

}
