import { Component, OnInit } from '@angular/core';
import { UserInput } from '../user-input';

const ELEMENT_DATA: UserInput[] = [
  { id: 1, firstName: 'Mark', lastName: 'Toss', email: 'mark.toss@gmail.com' },
  { id: 2, firstName: 'Rob', lastName: 'Tess', email: 'rob.tess@gmail.com' },
];

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource = ELEMENT_DATA;
}
