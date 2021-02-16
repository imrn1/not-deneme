import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { canActivate, redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectLoggedInToNotes=()=> redirectLoggedInTo(['notes']);
const redirectUnauthorizedToLogin=()=> redirectUnauthorizedTo(['login'])

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"login"
  },
  {
    path:"login",
    component:LoginComponent,
    ...canActivate(redirectLoggedInToNotes)
  },
  {
    path:"notes",
    loadChildren: () => import('../libs/modules/my-notes/my-notes.module').then(m => m.MyNotesModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path:"addNote",
    loadChildren: () => import('../libs/modules/my-notes/my-notes.module').then(m => m.MyNotesModule),
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
