import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

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

  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

}
