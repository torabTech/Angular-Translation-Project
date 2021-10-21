import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { GameServiceService } from '../game-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Game } from '../model/game.model';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  game:any = new Game();
  id:any;

  form = new FormGroup({
    title : new FormControl(''),
    price : new FormControl(''),
    year : new FormControl(''),
    maxPlayers : new FormControl('')
  });

  constructor(private gameService:GameServiceService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getGame();
  }

  getGame(){
    this.gameService.getSingleGame(this.id).subscribe(result=>{
      this.game = result;
      this.form = new FormGroup({
        title : new FormControl(this.game.title),
        price : new FormControl(this.game.price),
        year : new FormControl(this.game.year),
        maxPlayers : new FormControl(this.game.maxPlayers)
      });

    })
  }
  editGame(){
      this.gameService.updateGame(this.id,this.form.value).subscribe(result=>{
        this.router.navigateByUrl('/');
        console.log(result)
      //  alert(JSON.stringify(this.data.message))
      });
  }

}
