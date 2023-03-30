import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../models/task.model';
import { setTaskList } from '../../redux/actions/data.actions';
import { selectTaskList } from '../../redux/selectors/data.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];

  constructor(private store: Store) {
    this.restoreDataFromLocalStorage();
  }

  ngOnInit(): void {
    this.store.select(selectTaskList).subscribe((data) => {
      this.taskList = data;
      this.saveDataOnLocalStorage();
    });
  }

  saveDataOnLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  restoreDataFromLocalStorage() {
    let localDataTaskList: string | null = localStorage.getItem('taskList');
    if (localDataTaskList) {
      let restoredTaskList: Task[] = JSON.parse(localDataTaskList);
      this.store.dispatch(setTaskList({ payload: restoredTaskList }));
    }
  }
}
