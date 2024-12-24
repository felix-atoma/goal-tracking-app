// src/app/features/goals/goals.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
// Import other PrimeNG modules as needed

@NgModule({
  declarations: [GoalsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    // Add other modules here
  ],
})
export class GoalsModule {}
