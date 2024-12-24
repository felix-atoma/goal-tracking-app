// src/app/state/goal.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GoalActions from './goal.actions';
import { GoalService } from '../core/services/goal.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GoalEffects {
  loadGoals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalActions.loadGoals),
      mergeMap(() =>
        this.goalService.getGoals().pipe(
          map((goals) => GoalActions.loadGoalsSuccess({ goals })),
          catchError((error) => of(GoalActions.loadGoalsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private goalService: GoalService) {}
}
