import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task, TaskStatusEnum } from '../../models/task.model';
import { DataService } from '../../service/data.service';
import { createNewTask } from '../../redux/actions/data.actions';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  constructor(private store: Store, private dataService: DataService) {}

  ngOnInit(): void {}

  taskTitle: string = '';

  onClickAddTask() {
    this.dataService.createNewTask(this.taskTitle);
    this.taskTitle = '';
  }
}
