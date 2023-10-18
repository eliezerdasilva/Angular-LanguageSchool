import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthGuard } from './services/auth/auth-guard';
import { StudentContentComponent } from './pages/admin-page/content/student-content/student-content.component';
import { TeacherContentComponent } from './pages/admin-page/content/teacher-content/teacher-content.component';
import { ClassroomContentComponent } from './pages/admin-page/content/classroom-content/classroom-content.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    // canActivate: [AuthGuard]
    children: [
      {
        path: 'student',
        component: StudentContentComponent
      },
      {
        path: 'teacher',
        component: TeacherContentComponent
      },
      {
        path: 'classroom',
        component: ClassroomContentComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
