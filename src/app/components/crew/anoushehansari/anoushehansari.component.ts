import { Component, OnInit } from '@angular/core';
import {crewData} from 'src/main'

@Component({
  selector: 'app-anoushehansari',
  templateUrl: './anoushehansari.component.html',
  styleUrls: ['./anoushehansari.component.css']
})
export class AnoushehansariComponent implements OnInit {

  constructor() { }

  currentData = crewData[3]
  name = this.currentData.name;
  role = this.currentData.role;
  bio = this.currentData.bio;


  ngOnInit(): void {
  }

}
