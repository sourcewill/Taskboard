import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dataFeatureKey, IDataSatate } from '../reducers/data.reducer';


export const dataFeature =
  createFeatureSelector<IDataSatate>(dataFeatureKey);

export const selectTaskList = createSelector(
  dataFeature,
  (state: IDataSatate) => state.taskList
);
