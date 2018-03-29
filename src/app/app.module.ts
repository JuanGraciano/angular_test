import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes  } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InfoBarService } from './services/info-bar.service';
import { UserService } from './services/user.service';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FilterPipe } from './shared/filter.pipe';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"newComment",
    component: NewCommentComponent
  },
  {
    path:"editComment",
    component: EditCommentComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    FilterPipe,
    NewCommentComponent,
    EditCommentComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    InfoBarService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
