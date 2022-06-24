import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../models/task.model';
import { selectTaskList } from '../../store/selectors/data.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList: Task[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectTaskList).subscribe(data => this.taskList = data);
  }



}
