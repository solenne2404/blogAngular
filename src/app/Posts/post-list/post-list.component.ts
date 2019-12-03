import { Component, OnInit,  OnDestroy, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
 
  @Input() postsList: Post[];
  postsListSubscription: Subscription;

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.postsListSubscription= this.postsService.postsSubject.subscribe(
      (postsList: Post[]) => {
        this.postsList = postsList;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts','view', id]);
  }

  ngOnDestroy() {
    this.postsListSubscription.unsubscribe();
  }

}
