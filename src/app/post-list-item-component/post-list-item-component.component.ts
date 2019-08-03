import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../shared/post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() currentPost: Post;

  constructor() { }

  ngOnInit() {
  }

  getPostColor(): string {
    if (this.currentPost.loveIts > 0) {
      return 'green';
    }else if(this.currentPost.loveIts == 0){
      return '';
    } 
    else {
      return 'red';
    }
  }

  onLoveIt() {
    this.currentPost.loveIts = this.currentPost.loveIts + 1;
  }

  onDontLoveIt() {
    this.currentPost.loveIts = this.currentPost.loveIts - 1;
  }

}
