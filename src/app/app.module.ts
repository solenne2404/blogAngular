import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostListComponent } from './Posts/post-list/post-list.component';
import { PostListItemComponent } from './Posts/post-list-item/post-list-item.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PostFormComponent } from './Posts/post-form/post-form.component';
import { SinglePostComponent } from './Posts/single-post/single-post.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PostsService } from './services/posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component'


const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: 'posts', component: PostListComponent},
  { path: 'posts/view/:id', component: SinglePostComponent},
  { path: 'posts/new', canActivate: [AuthGuardService] , component: PostFormComponent},
  { path: '', redirectTo: 'posts',  pathMatch: 'full'},
  { path: '**', redirectTo: 'posts'}
]

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    SinglePostComponent,
    PostFormComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
