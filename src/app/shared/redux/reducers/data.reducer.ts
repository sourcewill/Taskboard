import { createReducer, on } from '@ngrx/store';
import { Task, TaskStatusEnum } from '../../models/task.model';
import { createNewTask, setTaskList } from '../actions/data.actions';

export const dataFeatureKey = 'data';

export interface IDataSatate {
  taskList: Task[];
}

export const initialState: IDataSatate = {
  taskList: [
    {
      id: 1,
      title: 'Initial task example completed',
      status: TaskStatusEnum.DONE,
      subtasksList: [
        { id: 1, title: 'Subtask test', isDone: false },
        { id: 2, title: 'Subtask test', isDone: true },
      ],
      description: 'Description.',
    },
    {
      id: 2,
      title: 'Task example in progress',
      status: TaskStatusEnum.IN_PROGRESS,
      subtasksList: [],
      description: 'Description.',
    },
  ],
};

export const _dataReducer = createReducer(
  initialState,

  on(setTaskList, (state: IDataSatate, action) => {
    return {
      ...state,
      taskList: action.payload,
    };
  }),

  on(createNewTask, (state: IDataSatate, action) => {
    return {
      ...state,
      taskList: [...state.taskList, action.payload],
    };
  })
);

export function dataReducer(state: any, action: any) {
  return _dataReducer(state, action);
}
