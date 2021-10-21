import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';
import { Form, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  submitted=false;
  form!:FormGroup;

  constructor(private gameService:GameServiceService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      repeatPassword: ['',Validators.required]
    })
  }
  addUser():void{
      this.submitted = true;

      if(this.form.invalid) return;




      if(this.form.value.password !== this.form.value.repeatPassword){
        alert('Passwords Not Matched!!!');
        return;
      }

      this.gameService.addUser(this.form.value).subscribe(result=>{
        console.log(result)
        this.router.navigateByUrl('');
        alert('Game has been successfully inserted!');
      });
  }

  get f(){
    return this.form.controls;
  }
}
