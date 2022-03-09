import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ContentService } from '../content.service';
import { IPost } from '../shared/interfaces';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [ThemesComponent, NewThemeComponent, AsideComponent],
  imports: [CommonModule, ThemeRoutingModule],
})
export class ThemesModule {
  recentPosts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchRecentPosts();
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService
      .loadPosts(5)
      .subscribe((posts) => (this.recentPosts = posts));
  }
}
