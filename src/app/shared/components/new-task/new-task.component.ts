import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task, ITaskSatatus } from '../../models/task.model';
import { addNewTask } from '../../store/actions/data.actions';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  taskTitle: string = '';

  onClickAddTask(){
    let newTask: Task = new Task(this.taskTitle);
    this.store.dispatch(addNewTask({payload: newTask}));
    this.taskTitle = '';
  }
}
