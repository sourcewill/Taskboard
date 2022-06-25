import { Component, Input, OnInit } from '@angular/core';
import { TaskStatusEnum as TaskStatusEnum, Task } from '../../models/task.model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task?: Task;

  isDropdownActive: boolean = false; 

  get selectedStatus(): string {
    if(this.task?.status === TaskStatusEnum.IN_PROGRESS){
      return 'In Progress';
    }
    if(this.task?.status === TaskStatusEnum.PAUSED){
      return 'Paused';
    }
    if(this.task?.status === TaskStatusEnum.DONE){
      return 'Done';
    }
    return 'To Do';
  }

  get cardColor(): string {
    if(this.task?.status === TaskStatusEnum.IN_PROGRESS){
      return 'rgba(72, 233, 255, 0.11)';
    }
    if(this.task?.status === TaskStatusEnum.PAUSED){
      return 'rgba(255, 216, 91, 0.16)';
    }
    if(this.task?.status === TaskStatusEnum.DONE){
      return 'rgba(69, 255, 79, 0.09)';
    }
    return 'rgba(255, 255, 255, 0.04)';
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  taskStatusEnum = TaskStatusEnum;

  onClickStatus(){
    this.isDropdownActive = !this.isDropdownActive;
  }

  onChangeStatus(status: TaskStatusEnum){
    if(this.task){
      let editedTask = {...this.task, status: status};
      this.dataService.updateTask(editedTask);
    }
    this.isDropdownActive = !this.isDropdownActive;
  } 

}
