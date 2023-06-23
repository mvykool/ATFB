import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project in angular';
  tasks = [
    'go to buy milk',
    'learn angular',
    'learn vue'
  ];
}
