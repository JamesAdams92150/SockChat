import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LobbyPage } from './lobby';
import { ConnexionPage } from '../connexion/connexion';

@NgModule({
  declarations: [
    LobbyPage,
    ConnexionPage,
  ],
  imports: [
    IonicPageModule.forChild(LobbyPage),
  ],
})
export class LobbyPageModule {}
