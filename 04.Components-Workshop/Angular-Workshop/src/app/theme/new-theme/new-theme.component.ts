import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css'],
})
export class NewThemeComponent {
  @ViewChild(NgForm) form: NgForm | undefined;

  constructor(private contentService: ContentService, private router: Router) {}

  create(): void {
    if (this.form?.invalid) {
      return;
    }
    this.contentService.createNewTheme(this.form?.value).subscribe({
      next: () => {
        this.router.navigate(['/themes']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
