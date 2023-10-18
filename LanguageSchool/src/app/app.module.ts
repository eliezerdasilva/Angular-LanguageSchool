import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componet/header/header.component';
import { FooterComponent } from './componet/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MaterialExportModule } from 'src/app/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { ClassroomContentComponent } from './pages/admin-page/content/classroom-content/classroom-content.component';
import { StudentContentComponent } from './pages/admin-page/content/student-content/student-content.component';
import { ModalComponent } from './pages/admin-page/components/modal/modal.component';
import { CustomTableComponent } from './pages/admin-page/content/components/custom-table/custom-table.component';
import { TeacherContentComponent } from './pages/admin-page/content/teacher-content/teacher-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AdminPageComponent,
    AboutPageComponent,
    ClassroomContentComponent,
    StudentContentComponent,
    TeacherContentComponent,
    ModalComponent,
    CustomTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    MaterialExportModule,
    LoginPageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
