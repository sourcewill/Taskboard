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
  isConfirmDeleteActive: boolean = false;

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

  onClickDelete(){
    this.isConfirmDeleteActive = !this.isConfirmDeleteActive;
  }

  onConfirmDelete(){
    if(this.task){
      this.dataService.deleteTask(this.task.id);
    }
  }

  onChangeStatus(status: TaskStatusEnum){
    this.updateTaskField('status', status);
    this.isDropdownActive = !this.isDropdownActive;
  }


  updateTaskField(updatedField: string, value: any){
    if(this.task){
      let editedTask = {...this.task, [updatedField]: value};
      this.dataService.updateTask(editedTask);
    }
  }

}
