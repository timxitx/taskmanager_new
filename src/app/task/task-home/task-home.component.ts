import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { routeAnim } from 'src/app/anims/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    routeAnim
  ]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@slideToRight') state: any;

  lists = [
    {
      id: 1,
      order: 1,
      name: "Await",
      tasks: [
        {
          id: 1,
          desc: 'task1: Go to market',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: 'tim',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: 'task2: Looking for a tool',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'dora',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        },
      ]

    },
    {
      id: 1,
      order: 2,
      name: "Ongoing",
      tasks: [
        {
          id: 1,
          desc: 'task3: Searching solution on the Internet',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: 'tim',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: 'task4: Reading books',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'dora',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        },
      ]

    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title:"New List"}});
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: 'New Task'}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task:any) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: 'Edit Task', task: task}})
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmComponent, {data: {title: "Delete List", content: "Confirm to delete this list?"}})
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: "Edit List Name"}})
  }

}
