import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: "Blah",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut turpis et elit laoreet bibendum eget vel justo. Vivamus ac dui ultrices, dapibus libero ut, molestie lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac feugiat mauris. Donec id massa scelerisque, semper enim in, mattis nulla. Phasellus lobortis aliquam pretium. Etiam vel ipsum lacinia, tincidunt mauris ut, eleifend diam.',
      loveIts: 0,
      created_at: Date
    } ,
    {
      title: "Blah Blah",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut turpis et elit laoreet bibendum eget vel justo. Vivamus ac dui ultrices, dapibus libero ut, molestie lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac feugiat mauris. Donec id massa scelerisque, semper enim in, mattis nulla. Phasellus lobortis aliquam pretium. Etiam vel ipsum lacinia.',
      loveIts: 0,
      created_at: Date
    } ,
    {
      title: "Blah Blah Blah",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut turpis et elit laoreet bibendum eget vel justo. Vivamus ac dui ultrices, dapibus libero ut, molestie lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac feugiat mauris. Donec id massa scelerisque.',
      loveIts: 0,
      created_at: Date
    } 
  ];
}
