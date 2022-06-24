import { createReducer, on } from '@ngrx/store';
import { Task, ITaskSatatus } from '../../models/task.model';
import { addNewTask, setTaskList } from '../actions/data.actions';


export const dataFeatureKey = 'data';

export interface IDataSatate {
  taskList: Task[];
}

export const initialState: IDataSatate = {
    taskList: [
        {
            title: 'Teste',
            status: ITaskSatatus.TODO,
            childs: [],
        },
        {
            title: 'Teste 2',
            status: ITaskSatatus.TODO,
            childs: [],
        }
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

  on(addNewTask, (state: IDataSatate, action) => {
    return {
      ...state,
      taskList: [...state.taskList, action.payload],
    };
  }),
);

export function dataReducer(state: any, action: any) {
  return _dataReducer(state, action);
}
