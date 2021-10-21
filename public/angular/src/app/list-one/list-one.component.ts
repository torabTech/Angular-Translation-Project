import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GameServiceService } from '../game-service.service';
import { Game } from '../model/game.model';

@Component({
  selector: 'app-list-one',
  templateUrl: './list-one.component.html',
  styleUrls: ['./list-one.component.css']
})
export class ListOneComponent implements OnInit {
  game:any = new Game();
  id:any;

  theTitle:string='';
  constructor(private gameService:GameServiceService,private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });

     this.gameService.getSingleGame(this.id).subscribe(result=>{
       this.theTitle = JSON.stringify(result)

      this.game=result;

      console.log(this.game.title)
    });
  }

  back(){
    this.router.navigateByUrl('/');
  }

}
