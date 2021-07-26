import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { itemAnim } from "../../anims/item.anim";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item:any;
  @Input() avatar:any;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = "";

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

  @HostListener('mouseenter') onMouseEnter() {
    this.widerPriority = "in";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.widerPriority = "out";
  }

}
