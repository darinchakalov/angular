import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  users$ = this.userService.users$;

  loadUsers = this.userService.loadUsers;

  constructor(public userService: UserService) {
    this.loadUsers();
  }

  ngAfterViewInit() {
    console.log(this.searchInput.nativeElement);
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        map((e) => (e.target as HTMLInputElement).value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((value) => this.loadUsers(value));
  }

  searchButtonHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);
  }
}
