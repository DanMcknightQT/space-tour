import { Component, OnInit } from '@angular/core';
import { crewData } from 'src/main';

@Component({
  selector: 'app-victor',
  templateUrl: './victor.component.html',
  styleUrls: ['./victor.component.css']
})
export class VictorComponent implements OnInit {

  crewMember = crewData[2]
  name = this. crewMember.name
  role = this.crewMember.role
  bio = this.crewMember.bio

  constructor() { }

  ngOnInit(): void {
  }

}
