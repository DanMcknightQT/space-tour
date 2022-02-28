import { Component, OnInit } from '@angular/core';
import {crewData} from 'src/main'

@Component({
  selector: 'app-victorglover',
  templateUrl: './victorglover.component.html',
  styleUrls: ['./victorglover.component.css']
})
export class VictorgloverComponent implements OnInit {

  constructor() { }

  currentData = crewData[2]
  name = this.currentData.name;
  role = this.currentData.role;
  bio = this.currentData.bio;

  ngOnInit(): void {
  }

}
