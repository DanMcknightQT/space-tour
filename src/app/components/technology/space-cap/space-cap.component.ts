import { Component, OnInit } from '@angular/core';
import { techData } from 'src/main';

@Component({
  selector: 'app-space-cap',
  templateUrl: './space-cap.component.html',
  styleUrls: ['./space-cap.component.css']
})
export class SpaceCapComponent implements OnInit {

  technologyData = techData[2]
  name = this.technologyData.name
  description = this.technologyData.description

  constructor() { }

  ngOnInit(): void {
  }

}
