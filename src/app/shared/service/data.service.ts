import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../models/task.model';
import { createNewTask, setTaskList } from '../redux/actions/data.actions';
import { selectTaskList } from '../redux/selectors/data.selectors';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  taskList: Task[] = [];
  newId: number = 0;

  constructor(private store: Store) {
    this.store.select(selectTaskList).subscribe((data) => {
      if (!data) return;
      this.taskList = [...data];
      if (data.length) {
        this.newId = data[data.length - 1].id + 1;
      }
    });
  }

  createNewTask(title: string) {
    let newTask: Task = new Task(title);
    newTask.id = this.newId;
    this.store.dispatch(createNewTask({ payload: newTask }));
  }

  updateTask(taskEdited: Task) {
    let updatedTaskList: Task[] = this.taskList.map((task) => {
      if (task.id === taskEdited.id) {
        return taskEdited;
      }
      return task;
    });
    this.store.dispatch(setTaskList({ payload: updatedTaskList }));
  }

  deleteTask(taskId: number) {
    let updatedTaskList: Task[] = this.taskList.filter(
      (task) => task.id !== taskId
    );
    this.store.dispatch(setTaskList({ payload: updatedTaskList }));
  }
}
