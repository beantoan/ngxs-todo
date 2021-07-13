export class AddTodo {
  static readonly type = '[TODO] Add Todo';

  constructor(public title: string) {
  }
}

export class FilterTodos {
  static readonly type = '[TODO] Filter Todos';

  constructor(public term: string) {
  }
}
