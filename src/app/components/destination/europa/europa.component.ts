import { Component, OnInit } from '@angular/core';
import { destinationsData } from 'src/main';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.css']
})
export class EuropaComponent implements OnInit {

  destinData = destinationsData[2]
  name = this.destinData.name
  description = this.destinData.description
  distance = this.destinData.distance
  travel= this.destinData.travel
  constructor() { }

  ngOnInit(): void {
  }

}
