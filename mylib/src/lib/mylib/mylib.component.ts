import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-mylib',
  imports: [CommonModule],
  templateUrl: './mylib.component.html',
  styleUrl: './mylib.component.css',
})
export class MylibComponent {
  showLetter(params:string) {
    console.log(params);
  }
}
