import { Component, OnInit } from '@angular/core';
import { techData } from 'src/main';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  technologyData = techData[0]
  name = this.technologyData.name
  description = this.technologyData.description

  constructor() { }

  ngOnInit(): void {
  }

}
