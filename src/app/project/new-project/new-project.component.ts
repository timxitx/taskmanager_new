import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NewProjectComponent>,
    private oc: OverlayContainer) { }

  ngOnInit(): void {
    var darkTheme = this.data.dark?'myapp-dark-theme':'';
    this.oc.getContainerElement().classList.add(darkTheme);
  }

  onClick() {
    this.dialogRef.close('received');
  }

}
