import { Component, OnInit } from '@angular/core';
import {techData} from 'src/main'

@Component({
  selector: 'app-space-capsule',
  templateUrl: './space-capsule.component.html',
  styleUrls: ['./space-capsule.component.css']
})
export class SpaceCapsuleComponent implements OnInit {

  constructor() { }

  currentData = techData[1]
  techName = this.currentData.name;
  description = this.currentData.description;

  ngOnInit(): void {
  }

}
