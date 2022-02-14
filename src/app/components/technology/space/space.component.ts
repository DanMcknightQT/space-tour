import { Component, OnInit } from '@angular/core';
import { techData } from 'src/main';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  technologyData = techData[1]
  name = this.technologyData.name
  description = this.technologyData.description

  constructor() { }

  ngOnInit(): void {
  }

}
