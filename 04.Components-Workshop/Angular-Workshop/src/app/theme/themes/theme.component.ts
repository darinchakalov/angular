import { Component, Input } from '@angular/core';
import { ContentService } from '../../content.service';
import { IPost, ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemesComponent {
  @Input() recentPosts: IPost[] | undefined;

  themes: ITheme[] | undefined;
  constructor(private contentService: ContentService) {
    this.fetchThemes();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService
      .loadThemes()
      .subscribe((themes) => (this.themes = themes));
  }
}
