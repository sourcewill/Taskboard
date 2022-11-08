import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { TaskStatusEnum as TaskStatusEnum, Task, TaskStatusColor } from '../../models/task.model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task?: Task;

  @ViewChild('optionsoverlay') optionsOverlayRef: any;

  isDropdownActive: boolean = false;
  isConfirmDeleteActive: boolean = false;

  get statusColor(): string {
    if (!this.task?.status) return TaskStatusColor.TODO;
    let adapter = {
      [TaskStatusEnum.TODO]: TaskStatusColor.TODO,
      [TaskStatusEnum.IN_PROGRESS]: TaskStatusColor.IN_PROGRESS,
      [TaskStatusEnum.PAUSED]: TaskStatusColor.PAUSED,
      [TaskStatusEnum.DONE]: TaskStatusColor.DONE,
    }
    return adapter[this.task?.status] ?? TaskStatusColor.TODO;
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (event?.target?.className === 'selected-status') return;
    this.closeOptionsOverlay();
  }

  openOptionsOverlay() {
    this.isDropdownActive = true;
  }

  closeOptionsOverlay() {
    this.isDropdownActive = false;
  }

  taskStatusEnum = TaskStatusEnum;

  onClickDelete() {
    this.isConfirmDeleteActive = !this.isConfirmDeleteActive;
  }

  onConfirmDelete() {
    if (this.task) {
      this.dataService.deleteTask(this.task.id);
    }
  }

  onChangeStatus(status: TaskStatusEnum) {
    this.updateTaskField('status', status);
    this.isDropdownActive = !this.isDropdownActive;
  }


  updateTaskField(updatedField: string, value: any) {
    if (this.task) {
      let editedTask = { ...this.task, [updatedField]: value };
      this.dataService.updateTask(editedTask);
    }
  }

}
