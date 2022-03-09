import { Component, Input } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  @Input() title!: string;
  items: IPost[] | undefined;

  recentPosts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchRecentPosts();
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    let posts = this.contentService.loadPosts(5);
    posts.subscribe(posts => this.items = posts);

    this.contentService
      .loadPosts(5)
      .subscribe((posts) => (this.recentPosts = posts));
  }
}
