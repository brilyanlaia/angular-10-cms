import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  show = false;

  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  onClickedSubmit() {
    // when click button
    // this.submitted = true;
    // enable button
    //  this.submitted = false
    this.router.navigate(['member', 'home']);
  }

  get loginFormVal() {
    return this.loginForm.controls;
  }
}
