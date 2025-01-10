import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MylibComponent } from '@myworkspace/mylib';
@Component({
  imports: [NxWelcomeComponent, RouterModule,MylibComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-project';
}
