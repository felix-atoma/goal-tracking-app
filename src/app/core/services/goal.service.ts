// src/app/core/services/goal.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goal } from '../../state/goal.model';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  private baseUrl = 'http://localhost:3000/goals';

  constructor(private http: HttpClient) {}

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.baseUrl);
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.baseUrl, goal);
  }

  updateGoal(goal: Goal): Observable<Goal> {
    return this.http.put<Goal>(`${this.baseUrl}/${goal.id}`, goal);
  }

  deleteGoal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
