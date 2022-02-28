import { Component, OnInit } from '@angular/core';
import {techData} from 'src/main'

@Component({
  selector: 'app-space-port',
  templateUrl: './space-port.component.html',
  styleUrls: ['./space-port.component.css']
})
export class SpacePortComponent implements OnInit {

  constructor() { }

  currentData = techData[1]
  techName = this.currentData.name;
  description = this.currentData.description;

  ngOnInit(): void {
  }

}
