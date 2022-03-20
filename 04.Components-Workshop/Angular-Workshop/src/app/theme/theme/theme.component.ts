import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  theme: ITheme | undefined;

  constructor(
    private contentService: ContentService,
    private activateRoute: ActivatedRoute
  ) {
    this.fetchTheme();
  }

  fetchTheme(): void {
    this.theme = undefined;
    const id = this.activateRoute.snapshot.params['themeId'];

    this.contentService
      .loadSingleTheme(id)
      .subscribe((theme) => (this.theme = theme));
  }
}
