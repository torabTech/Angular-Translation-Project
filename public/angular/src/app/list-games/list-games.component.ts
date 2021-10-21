import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {
  games:any;
  constructor(private gameService:GameServiceService) { }

  ngOnInit(): void {
    this.loadAllGames();
  }

  loadAllGames(){
    this.gameService.getAllGames().subscribe(data=>{
      console.log(data);
      this.games = data;
    });
  }
  deleteGame(id:any){
      if(confirm('Are you sure to delete the game?')){
        this.gameService.deleteGame(id).subscribe(result=>{
            console.log(result);
            this.loadAllGames();
        });
      }
  }

}
