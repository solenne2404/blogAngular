import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedat: Date;
  @Input() loveIts : number;

  constructor() { }

  ngOnInit() {

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