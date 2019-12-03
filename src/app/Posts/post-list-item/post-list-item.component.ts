import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedat: string;
  @Input() loveIts : number;
  @Input() i : number;
  
  constructor(private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {

  }
  onViewPost(id: number) {
    this.router.navigate(['/posts','view', id]);
  }

  onLove() {
    this.loveIts ++;
    return this.loveIts;
  }

  onDontLove(){
    this.loveIts --;
    return this.loveIts;
  }
}
