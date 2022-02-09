import { Component, OnInit } from '@angular/core';
import { technologyData } from 'src/main';

@Component({
  selector: 'app-tech-information',
  templateUrl: './tech-information.component.html',
  styleUrls: ['./tech-information.component.css']
})
export class TechInformationComponent implements OnInit {

  constructor() { }

  currentData = technologyData[0]
  techName = this.currentData.name
  techDescription = this.currentData.description
  techImage = this.currentData.images.portrait

  ngOnInit(): void {
  }

  getData(data: any){
    if(data){
      this.currentData = data
    }
    this.techName = this.currentData.name
    this.techDescription = this.currentData.description
    this.techImage = this.currentData.images.portrait
  }

}
