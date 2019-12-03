import { Component } from '@angular/core';
import { isDate } from 'util';
import * as firebase from 'firebase';

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
      created_at: new Date(2019,10,25)
    } ,
    {
      title: "Blah Blah",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut turpis et elit laoreet bibendum eget vel justo. Vivamus ac dui ultrices, dapibus libero ut, molestie lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac feugiat mauris. Donec id massa scelerisque, semper enim in, mattis nulla. Phasellus lobortis aliquam pretium. Etiam vel ipsum lacinia.',
      loveIts: 0,
      created_at: new Date(2019,8,12)
    } ,
    {
      title: "Blah Blah Blah",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut turpis et elit laoreet bibendum eget vel justo. Vivamus ac dui ultrices, dapibus libero ut, molestie lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac feugiat mauris. Donec id massa scelerisque.',
      loveIts: 0,
      created_at: new Date(2019,3,5)
    } 
  ];

    constructor() {
      const firebaseConfig = {
        apiKey: "AIzaSyBg4JVYbJPt3svXR8Ni0PLt0-Osk2YNETQ",
        authDomain: "blogangular-d29f8.firebaseapp.com",
        databaseURL: "https://blogangular-d29f8.firebaseio.com",
        projectId: "blogangular-d29f8",
        storageBucket: "blogangular-d29f8.appspot.com",
        messagingSenderId: "751993273005",
        appId: "1:751993273005:web:722c9011dc1153ad77e424",
        measurementId: "G-GQBWYGC0ZZ"
      };
      firebase.initializeApp(firebaseConfig);
    }
}
