import { Component, OnInit } from '@angular/core';
import {techData} from 'src/main'

@Component({
  selector: 'app-launch-vehicle',
  templateUrl: './launch-vehicle.component.html',
  styleUrls: ['./launch-vehicle.component.css']
})
export class LaunchVehicleComponent implements OnInit {

  constructor() { }

  currentData = techData[0]
  techName = this.currentData.name;
  description = this.currentData.description;

  ngOnInit(): void {
  }

}
