import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: String="";
  email: String="";
  password: String="";

  constructor(private router: Router, private http: HttpClient){
  }

  ngOnInit(): void{

  }

  register(){
    let bodyData = {
      "username": this.username,
      "email": this.email,
      "password": this.password
    };

    this.http.post("http://localhost:3000/user/save", bodyData).subscribe((resultData: any)=>{
      console.log(resultData);
      alert("User has been created successfully!");
      this.router.navigateByUrl('/login');
    })
  }
}
