import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule,Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListGamesComponent } from './list-games/list-games.component';
import { ListOneComponent } from './list-one/list-one.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddGameComponent } from './add-game/add-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes:Routes=[
  {
    path: '',
    component:ListGamesComponent
  },
  {
    path: 'single-game/:id',
    component:ListOneComponent
  },
  {
    path: 'add-game',
    component:AddGameComponent
  },
  {
    path: 'edit-game/:id',
    component:EditGameComponent
  },
  {
    path: 'register-user',
    component:RegisterUserComponent
  },
  {
    path: '**',
    component:ErrorPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListGamesComponent,
    ListOneComponent,
    ErrorPageComponent,
    FooterComponent,
    HeaderComponent,
    AddGameComponent,
    EditGameComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
