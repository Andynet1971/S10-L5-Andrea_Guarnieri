import { Component } from '@angular/core';
import { iTodo, iUser } from '../../interfaces';
import { TodoService } from '../../todo.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  todos: iTodo[] = [];
  users: iUser[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.todos = this.todoSvc.todoArray;
    this.users = this.userSvc.userArray;
  }

  // metodo per filtrare i dati e ottenere tutti i todo di tutti gli user
  getTodoByUser(userId: number): iTodo[] {
    return this.todos.filter((todo) => todo.userId === userId);
  }
}
