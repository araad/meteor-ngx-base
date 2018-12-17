import { Component } from '@angular/core';
import { name } from 'imports/todo';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = name;
}
