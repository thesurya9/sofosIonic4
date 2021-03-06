import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
   { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'homework', loadChildren: './homework/homework.module#HomeworkPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
