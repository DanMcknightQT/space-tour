import { Component, OnInit } from '@angular/core';
import {destinationsData} from 'src/main'

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  constructor() { }

  currentData = destinationsData[1];
   marsDescription = this.currentData.description;
   marsDistance = this.currentData.distance;
   marsTravelTime = this.currentData.travel;

  ngOnInit(): void {
  }

}
