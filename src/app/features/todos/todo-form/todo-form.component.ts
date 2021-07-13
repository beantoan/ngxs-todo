import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddTodo } from '../../../states/todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.form = fb.group({
      title: null
    });
  }

  ngOnInit(): void {
  }

  addTodo() {
    const {title} = this.form.value;
    this.store.dispatch(new AddTodo(title));
    this.form.controls.title.setValue(null);
  }

}
