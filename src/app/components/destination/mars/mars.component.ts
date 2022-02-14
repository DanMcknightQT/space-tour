import { Component, OnInit } from '@angular/core';
import { destinationsData } from 'src/main';
@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  destinData = destinationsData[1]
  name = this.destinData.name
  description = this.destinData.description
  distance = this.destinData.distance
  travel= this.destinData.travel
  constructor() { }

  ngOnInit(): void {
  }

}
