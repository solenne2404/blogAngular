import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Post;
  id: number;
  isAuth: boolean;

  constructor(private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
    private authService: AuthService ) { }

  ngOnInit() {
    this.post= new Post('', '');
    this.id = this.route.snapshot.params['id'];
    this.postsService.getSinglePost(+this.id).then(
      (post:Post) => {
        this.post = post;
      }
    );
    firebase.auth().onAuthStateChanged(
      (user) =>{
        if(user) {
          this.isAuth = true;
        } else { 
          this.isAuth = false;
        }
      }
    );
  }
  onBack() {
    this.router.navigate(['/posts']);
  }

  onLove() {
    this.postsService.postLoveCompte(this.id, 1);
  }

  onDontLove(){
    this.postsService.postLoveCompte(this.id, -1);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
    this.router.navigate(['/posts']);
  }
}
