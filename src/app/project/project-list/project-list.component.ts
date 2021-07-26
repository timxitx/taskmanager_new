import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from '../invite/invite.component';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects =[
    {
      "id": 1,
      "name": "Project1",
      "desc": "This is the project 1",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "id": 2,
      "name": "Project2",
      "desc": "This is the project 2",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: "New Project"}});
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  launchEditDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: "Edit Project"}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmComponent, {data: {title: "Delete Project", content: "Confirm to delete this project?"}})
  }

}
