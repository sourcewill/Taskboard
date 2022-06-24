import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task.model';


export const setTaskList = createAction('[TaskList] Set', props<{ payload: Task[] }>());

export const addNewTask = createAction('[Task] Add', props<{ payload: Task }>());


