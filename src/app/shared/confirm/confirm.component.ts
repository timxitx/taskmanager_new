import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  template: `
    <form action="">
    <h2 mat-dialog-title>{{title}}</h2>
    <div mat-dialog-content>
        {{content}}
    </div>
    <div mat-dialog-actions>
        <button type="button" mat-raised-button color="primary" (click)="onClick(true)">Confirm</button>
        <button type="button" mat-dialog-close mat-button (click)="onClick(false)">Cancel</button>
    </div>
    </form>
  `,
  styles: [
  ]
})
export class ConfirmComponent implements OnInit {

  title="";
  content="";

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
    private dialogRef: MatDialogRef<ConfirmComponent>) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }

}
