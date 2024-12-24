// src/app/state/goal.model.ts
export interface Comment {
    id: number;
    text: string;
  }
  
  export interface Milestone {
    id: number;
    name: string;
    comments: Comment[];
  }
  
  export interface Goal {
    id: number;
    title: string;
    description: string;
    milestones: Milestone[];
  }
  
  export interface GoalState {
    goals: Goal[];
    loading: boolean;
    error: any;
  }
  
  export const initialGoalState: GoalState = {
    goals: [],
    loading: false,
    error: null,
  };
  