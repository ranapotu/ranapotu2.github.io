import { Component, OnInit, Inject } from '@angular/core';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { UserInput } from '../user-input';

@Component({
  selector: 'app-dia-box',
  templateUrl: './dia-box.component.html',
  styleUrls: ['./dia-box.component.css'],
})
export class DiaBoxComponent implements OnInit {
  action!: string;
  inputData: any;

  constructor(
    public dialogRef: MatDialogRef<DiaBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserInput
  ) {
    this.inputData = { ...data };
    this.action = this.inputData.action;
  }

  ngOnInit(): void {}

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.inputData });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
