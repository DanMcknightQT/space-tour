import { Component, OnInit } from '@angular/core';
import { crewData } from 'src/main';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  crewMember = crewData[1]
  name = this. crewMember.name
  role = this.crewMember.role
  bio = this.crewMember.bio

  constructor() { }

  ngOnInit(): void {
  }

}
