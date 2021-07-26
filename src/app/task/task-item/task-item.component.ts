import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() item:any;
  @Input() avatar:any;
  @Output() taskClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    this.avatar = this.item.owner ? this.item.owner.avatar : "unassigned";
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckboxClick(ev: Event) {
    ev.stopPropagation();
  }

}
