import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() userArray: IUser[] = [];
  @Output() addUser = new EventEmitter<IUser>();
  constructor() {}

  ngOnInit(): void {}

  addNewUser(
    userNameInput: HTMLInputElement,
    userAgeInput: HTMLInputElement
  ): void {
    const name = userNameInput.value;
    const age = userAgeInput.valueAsNumber;

    this.addUser.emit({ name, age });

    userNameInput.value = '';
    userAgeInput.value = '';
  }
}
