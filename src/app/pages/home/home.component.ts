import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { UserService } from '../../user.service';
import { iTodo, iUser } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  todos: iTodo[] = [];
  users: iUser[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.todos = this.todoSvc.todoArray;
    this.users = this.userSvc.userArray;

    // ciclo l'array todo e completo l'attributo tramite l'array degli user concatenando nome e cognome
    this.todos.forEach((todo) => {
      const user = this.users.find((user) => user.id === todo.userId);
      if (user) {
        todo.name = `${user.firstName} ${user.lastName}`;
      }
    });
  }
}
