// src/app/features/goals/goals.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Goal } from '../../state/goal.model';
import * as GoalSelectors from '../../state/goal.selectors';
import * as GoalActions from '../../state/goal.actions';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
  goals$: Observable<Goal[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.goals$ = this.store.select(GoalSelectors.selectAllGoals);
    this.loading$ = this.store.select(GoalSelectors.selectLoading);
    this.error$ = this.store.select(GoalSelectors.selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(GoalActions.loadGoals());
  }

  createGoal(goal: Goal): void {
    this.store.dispatch(GoalActions.addGoal({ goal }));
  }

  editGoal(goal: Goal): void {
    this.store.dispatch(GoalActions.updateGoal({ goal }));
  }

  deleteGoal(id: number): void {
    this.store.dispatch(GoalActions.deleteGoal({ id }));
  }
}
