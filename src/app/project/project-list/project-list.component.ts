import { Component, OnInit, HostBinding, Host } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from '../invite/invite.component';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { routeAnim } from 'src/app/anims/router.anim';
import { listAnim } from 'src/app/anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    routeAnim,
    listAnim
  ]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@slideToRight') state: any;

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
    dialogRef.afterClosed().subscribe(result => {
      this.projects = [...this.projects, {id: 3, name: "New Project", desc: "This is the new project", coverImg: "assets/img/covers/8.jpg"}]
    })
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  launchEditDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: "Edit Project"}});
  }

  launchConfirmDialog(project:any) {
    const dialogRef = this.dialog.open(ConfirmComponent, {data: {title: "Delete Project", content: "Confirm to delete this project?"}})
    dialogRef.afterClosed().subscribe(result => {
      this.projects = this.projects.filter(p => p.id != project.id)
    })
  }

}
