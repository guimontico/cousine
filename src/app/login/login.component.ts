import { Component, OnInit, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { LoginModel } from "../models/login.model";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  readonly router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit() {
    this.loginForm.valid;
  }

  isFormValid() {
    return this.loginForm.valid;
  }

  login() {
    const loginInput = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
      isLoggedIn: true,
    };
    const localLogin = JSON.parse(
      localStorage.getItem("loginInfo") as string
    ) as LoginModel;
    if (
      loginInput.email === localLogin.email &&
      loginInput.password?.toString() === localLogin.password
    ) {
      localStorage.setItem("loginInfo", JSON.stringify(loginInput));
      console.log("Login successful");
      this.router.navigate([""]);
    }
  }
}
