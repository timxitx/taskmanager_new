import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects =[
    {
      "id": 1,
      "name": "1",
      "desc": "This is the project 1",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "id": 2,
      "name": "2",
      "desc": "This is the project 2",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark: true}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
