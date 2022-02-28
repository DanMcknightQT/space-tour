import { Component, OnInit } from '@angular/core';
import { destinationsData } from 'src/main';
@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {

  destinData = destinationsData[0]
  name = this.destinData.name
  description = this.destinData.description
  distance = this.destinData.distance
  travel= this.destinData.travel

  constructor() { }

  ngOnInit(): void {
  }

}
