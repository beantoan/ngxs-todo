import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Todo, TodoState } from '../../../states/todo.state';
import { Observable } from 'rxjs';
import { FilterTodos } from '../../../states/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  filterValue: string = '';

  @Select(TodoState.todos) todos$!: Observable<Todo[]>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
  }

  onChange($event: any) {
    this.store.dispatch(new FilterTodos(this.filterValue));
  }
}
