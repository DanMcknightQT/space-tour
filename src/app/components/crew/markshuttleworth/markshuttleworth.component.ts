import { Component, OnInit } from '@angular/core';
import {crewData} from 'src/main'

@Component({
  selector: 'app-markshuttleworth',
  templateUrl: './markshuttleworth.component.html',
  styleUrls: ['./markshuttleworth.component.css']
})
export class MarkshuttleworthComponent implements OnInit {

  constructor() { }

  currentData = crewData[1]
  name = this.currentData.name;
  role = this.currentData.role;
  bio = this.currentData.bio;

  ngOnInit(): void {
  }

}
