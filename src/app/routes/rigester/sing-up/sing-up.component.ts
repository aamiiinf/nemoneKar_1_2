import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})

export class SingUpComponent {
  minLength;
  constructor(private http:HttpClient) { }

  addPost(email: string, password: string) {
    this.http.post<{ msg: string, msg2:string }>("http://localhost:3000/api/singup", { email: email, password: password }).subscribe((data) => {
        alert(data.msg);
      });
  }

  onAddPost(form: NgForm) {
    this.addPost(form.value.email, form.value.password);
    form.resetForm();
  }

}
