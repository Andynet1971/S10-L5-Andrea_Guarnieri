import { Component } from '@angular/core';
import { iTodo, iUser } from '../../interfaces';
import { TodoService } from '../../todo.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
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
    console.log(this.todos);
  }
}
