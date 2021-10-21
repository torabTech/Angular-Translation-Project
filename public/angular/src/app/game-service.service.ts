import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  baseUrl:string = 'http://localhost:3000/api/games/';
  constructor(private httpClient:HttpClient) { }

  getAllGames(){
    return this.httpClient.get(this.baseUrl);
  }

  getSingleGame(id:any){
    return this.httpClient.get(environment.apiUrl+id);
  }

  addGame(data:any){
    return this.httpClient.post(environment.apiUrl,data);
  }

  addUser(data:any){
    return this.httpClient.post(environment.regUrl,data);
  }

  updateGame(id:any,data:any){
    return this.httpClient.put(environment.apiUrl+id,data);
  }

  deleteGame(id:any){
    return this.httpClient.delete(environment.apiUrl+id);
  }


}
