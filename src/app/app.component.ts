import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * AppComponent — Shell. DO NOT MODIFY the @Component decorator.
 *
 * HOW TO ADD YOUR COMPONENTS:
 *   1. Create UserListComponent as a standalone component
 *   2. Import it in this file:
 *        import { UserListComponent } from './user-list/user-list.component';
 *   3. Add it to the imports array below
 *   4. Use <app-user-list></app-user-list> in app.component.html
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
    // TODO: Import UserListComponent here once you create it
    // UserListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // No changes needed here.
  // All your work goes inside UserListComponent and UserCardComponent.
}
