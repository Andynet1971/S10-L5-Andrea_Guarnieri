import { Component, Input } from '@angular/core';
import { iTodo } from '../../interfaces';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrl: './single-todo.component.scss',
})
export class SingleTodoComponent {
  @Input()
  todowithuser!: iTodo;

  // funzione per cambiare stato al todo
  toggleStatus() {
    this.todowithuser.completed = !this.todowithuser.completed;
  }
}
