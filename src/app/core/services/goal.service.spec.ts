// src/app/core/services/goal.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { GoalService } from './goal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Goal } from '../../state/goal.model';

describe('GoalService', () => {
  let service: GoalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GoalService],
    });
    service = TestBed.inject(GoalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch goals', () => {
    const mockGoals: Goal[] = [
      { id: 1, title: 'Test Goal', description: 'Test Description', milestones: [] },
    ];

    service.getGoals().subscribe((goals) => {
      expect(goals.length).toBe(1);
      expect(goals).toEqual(mockGoals);
    });

    const req = httpMock.expectOne('http://localhost:3000/goals');
    expect(req.request.method).toBe('GET');
    req.flush(mockGoals);
  });

  // Add more tests for addGoal, updateGoal, deleteGoal
});
