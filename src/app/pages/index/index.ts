import { Component, Input } from '@angular/core';
import { InitialData } from '../../../lib/runtime/index';

@Component({
  template: `
  Hi mom!
    <div *ngFor="let post of getPosts()">{{post.id}}</div>
  `,
})
export class Index {
  @InitialData(`/assets/posts.json`)
  @Input()
  posts = [];

 constructor() { console.log('THis is running!');
}

  ngOnInit() {
    // console.log('posts is ',this.posts);
  }

  getPosts() {
    const ret = Object.values(this.posts);
    console.log('length is', ret.length);
    console.log(ret[0]);
    return 
    ret;
  }
}
