import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserInput } from '../user-input';
import { DiaBoxComponent } from '../dia-box/dia-box.component';
import { MatTable } from '@angular/material/table';

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

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

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
        console.log(result.data);
      } else if (result.event == 'Update') {
        console.log('u');
        this.updateRowData(result.data);
      }
    });
  }
  addRowData(row_obj: any) {
    this.dataSource.push({
      id: ELEMENT_DATA.length + 1,
      firstName: row_obj.firstName,
      lastName: row_obj.lastName,
      email: row_obj.email,
    });
    this.table.renderRows();
    this.dataSource = ELEMENT_DATA;
    console.log(this.dataSource);
  }

  updateRowData(row_obj: any) {
    console.log('update');
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        console.log(value.id);
        value.firstName = row_obj.firstName;
        value.lastName = row_obj.lastName;
        value.email = row_obj.email;
      }
      return true;
    });
  }

  deleteRow(rowid: number) {
    console.log(rowid);
    this.dataSource.splice(rowid);
  }
}
