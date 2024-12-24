// src/app/state/goal.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { GoalState, initialGoalState } from './goal.model';
import * as GoalActions from './goal.actions';

export const goalReducer = createReducer(
  initialGoalState,
  on(GoalActions.loadGoals, (state) => ({ ...state, loading: true })),
  on(GoalActions.loadGoalsSuccess, (state, { goals }) => ({
    ...state,
    goals,
    loading: false,
  })),
  on(GoalActions.loadGoalsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(GoalActions.addGoal, (state, { goal }) => ({
    ...state,
    goals: [...state.goals, goal],
  })),
  on(GoalActions.updateGoal, (state, { goal }) => ({
    ...state,
    goals: state.goals.map((g) => (g.id === goal.id ? goal : g)),
  })),
  on(GoalActions.deleteGoal, (state, { id }) => ({
    ...state,
    goals: state.goals.filter((g) => g.id !== id),
  }))
);
