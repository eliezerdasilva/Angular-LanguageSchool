import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private readonly authService: AuthService, private router: Router) {}

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  onSubmit() {
    const username = this.form.value.username
    const password = this.form.value.password

    console.log(this.form.value.username)
    console.log(this.form.value.password)

    if (username == "user" && password == "12345") {
      this.authService.login()
      console.log(this.authService.isAuthenticatedUser())
      this.router.navigate(['/admin'])
    } else {
      console.log("Wrong Credentials")
      console.log(this.authService.isAuthenticatedUser())
    }
  }
}
