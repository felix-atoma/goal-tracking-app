// src/app/state/goal.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GoalState } from './goal.model';

export const selectGoalState = createFeatureSelector<GoalState>('goals');

export const selectAllGoals = createSelector(
  selectGoalState,
  (state) => state.goals
);

export const selectLoading = createSelector(
  selectGoalState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectGoalState,
  (state) => state.error
);
