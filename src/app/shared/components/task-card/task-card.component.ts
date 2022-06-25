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

  get statusColor(): string {
    if(this.task?.status === TaskStatusEnum.IN_PROGRESS){
      return '#0BA3F8';
    }
    if(this.task?.status === TaskStatusEnum.PAUSED){
      return '#D28106';
    }
    if(this.task?.status === TaskStatusEnum.DONE){
      return '#25CD7C';
    }
    return '#8A9299';
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
