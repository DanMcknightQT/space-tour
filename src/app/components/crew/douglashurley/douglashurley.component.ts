import { Component, OnInit } from '@angular/core';
import {crewData} from 'src/main'

@Component({
  selector: 'app-douglashurley',
  templateUrl: './douglashurley.component.html',
  styleUrls: ['./douglashurley.component.css']
})
export class DouglashurleyComponent implements OnInit {

  constructor() { }

  currentData = crewData[0]
  name = this.currentData.name;
  role = this.currentData.role;
  bio = this.currentData.bio;
  
  ngOnInit(): void {
  }

}
