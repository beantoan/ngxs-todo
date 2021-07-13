import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddTodo, FilterTodos } from './todo.actions';

export interface Todo {
  title: string;
}

export interface TodoStateModel {
  allTodos: Todo[];
  todos: Todo[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    allTodos: [],
    todos: []
  }
})
@Injectable()
export class TodoState {
  @Selector()
  static todos(state: TodoStateModel): Todo[] {
    return state.todos;
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    const todo = {title: action.title} as Todo;
    ctx.setState({
      ...state,
      todos: [...state.todos, todo],
      allTodos: [...state.todos, todo]
    });
  }

  @Action(FilterTodos)
  filterTodos(ctx: StateContext<TodoStateModel>, action: FilterTodos) {
    const state = ctx.getState();
    const todos = action.term ? state.allTodos.filter(t => t.title.toUpperCase().includes(action.term.toUpperCase())) : state.allTodos;
    ctx.setState({
      ...state,
      todos: [...todos]
    });
  }
}
