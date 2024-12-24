// src/app/state/goal.actions.ts
import { createAction, props } from '@ngrx/store';
import { Goal } from './goal.model';

export const loadGoals = createAction('[Goal] Load Goals');
export const loadGoalsSuccess = createAction(
  '[Goal] Load Goals Success',
  props<{ goals: Goal[] }>()
);
export const loadGoalsFailure = createAction(
  '[Goal] Load Goals Failure',
  props<{ error: any }>()
);

export const addGoal = createAction(
  '[Goal] Add Goal',
  props<{ goal: Goal }>()
);

export const updateGoal = createAction(
  '[Goal] Update Goal',
  props<{ goal: Goal }>()
);

export const deleteGoal = createAction(
  '[Goal] Delete Goal',
  props<{ id: number }>()
);
