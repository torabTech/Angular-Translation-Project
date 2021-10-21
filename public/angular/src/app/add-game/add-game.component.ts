import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';
import { Form, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  submitted=false;
  form!:FormGroup;

  constructor(private gameService:GameServiceService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      title: ['',Validators.required],
      price: ['',Validators.required],
      year: ['',Validators.required],
      maxPlayers: ['',Validators.required]
    })
  }
  addGame():void{
      this.submitted = true;

      if(this.form.invalid) return;

      this.gameService.addGame(this.form.value).subscribe(result=>{
        console.log(result)
        this.router.navigateByUrl('');
        alert('Game has been successfully inserted!');
      });
  }

  get f(){
    return this.form.controls;
  }

}
