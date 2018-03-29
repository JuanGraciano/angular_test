import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NewCommentComponent } from '../new-comment/new-comment.component';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';


@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  routes: Routes = [
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

  getRoutes(){
    return this.routes;
  }

}