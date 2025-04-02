import { Component } from '@angular/core';
import { CategoryComponent } from '../../features/category/view/category/category.component';
import { TaskComponent } from '../../features/task/view/task/task.component';

import {MatDividerModule} from '@angular/material/divider';


const COMPONENTS = [CategoryComponent, TaskComponent];
const MODULES = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS, ...MODULES],
  template: `
    <div class="h-screen flex w-full border-4 border-blue-700">
      <!-- Category -->
      <app-category class="w-1/4 border-2 border-orange-700"/>

      <!-- Divisor -->
      <mat-divider class="h-full opacity-50" />

      <app-task class="w-3/4 border-2 border-green-700"/>
    </div>
  `,
  styles: ''
})
export class MainComponent {

}
