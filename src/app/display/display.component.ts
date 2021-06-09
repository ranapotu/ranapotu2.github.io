import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserInput } from '../user-input';
import { DiaBoxComponent } from '../dia-box/dia-box.component';

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
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'action',
  ];
  dataSource = ELEMENT_DATA;

  openDialog(action: string, obj: any) {
    console.log(obj, action);
    obj.action = action;
    const dialogRef = this.dialog.open(DiaBoxComponent, {
      width: '250px',
      data: obj,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      }
    });
  }
  addRowData(row_obj: any) {
    var d = new Date();
    this.dataSource.push({
      id: d.getTime(),
      firstName: row_obj.firstName,
      lastName: row_obj.lastName,
      email: row_obj.email,
    });
  }
}
