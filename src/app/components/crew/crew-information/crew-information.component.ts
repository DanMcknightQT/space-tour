 import { Component, OnInit } from '@angular/core';
import { crewData } from 'src/main';
@Component({
  selector: 'app-crew-information',
  templateUrl: './crew-information.component.html',
  styleUrls: ['./crew-information.component.css']
})
export class CrewInformationComponent implements OnInit {

  constructor() { }

  currentData = crewData[0]
  crewRole = this.currentData.role
  crewName = this.currentData.name
  crewBio = this.currentData.bio
  crewImage = this.currentData.images.png

  ngOnInit(): void {
  }

  getData(data: any){
    if(data){
      this.currentData = data
    }
    this.crewRole = this.currentData.role
    this.crewName = this.currentData.name
    this.crewBio = this.currentData.bio
    this.crewImage = this.currentData.images.png
  }
}
