import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'First App';

  username = 3;

  users = [
    {
      name: 'Ivan 1',
      age: 21,
    },
    {
      name: 'Ivan 2',
      age: 22,
    },
    {
      name: 'Ivan 3',
      age: 23,
    },
  ];

  addNewUserHandler(newUser: IUser): void {
    this.users.push(newUser);
  }

  showText = true;

  classes = ['class-1', 'class-2'];

  //if the below is true class named special will be applied to the element with [class.special]
  isSpecial = true;

  changeTitleHandler(titleInput: HTMLInputElement): void {
    this.title = titleInput.value;
    titleInput.value = '';
  }

  buttonClickHandler(): void {
    let current = this.username++;
    this.users.push({
      name: 'Ivan ' + current,
      age: 20 + current,
    });
  }

  toggleText(): void {
    this.showText = !this.showText;
  }
}
