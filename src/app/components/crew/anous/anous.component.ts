import { Component, OnInit } from '@angular/core';
import { crewData } from 'src/main';

@Component({
  selector: 'app-anous',
  templateUrl: './anous.component.html',
  styleUrls: ['./anous.component.css']
})
export class AnousComponent implements OnInit {

  crewMember = crewData[3]
  name = this. crewMember.name
  role = this.crewMember.role
  bio = this.crewMember.bio

  constructor() { }

  ngOnInit(): void {
  }

}
