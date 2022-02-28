import { Component, OnInit } from '@angular/core';
import { crewData } from 'src/main';

@Component({
  selector: 'app-douglas',
  templateUrl: './douglas.component.html',
  styleUrls: ['./douglas.component.css']
})
export class DouglasComponent implements OnInit {

  crewMember = crewData[0]
  name = this. crewMember.name
  role = this.crewMember.role
  bio = this.crewMember.bio

  

  constructor() { }

  ngOnInit(): void {
  }

}
