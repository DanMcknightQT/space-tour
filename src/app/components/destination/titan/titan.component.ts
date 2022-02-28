import { Component, OnInit } from '@angular/core';
import { destinationsData } from 'src/main';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.css']
})
export class TitanComponent implements OnInit {

  destinData = destinationsData[3]
  name = this.destinData.name
  description = this.destinData.description
  distance = this.destinData.distance
  travel= this.destinData.travel
  constructor() { }

  ngOnInit(): void {
  }

}
