import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          ()=> {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  SignInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          ()=>{
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  SignOutUser() {
    firebase.auth().signOut();
  }
}

