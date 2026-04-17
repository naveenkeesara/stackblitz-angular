import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// TODO: Step 2 — import and declare UserListComponent here
// TODO: Step 3 — import and declare UserCardComponent here

@NgModule({
  declarations: [
    AppComponent
    // TODO: Add your components here
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule   // already imported — needed for search input
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
