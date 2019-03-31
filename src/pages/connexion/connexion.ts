import { AboutPage } from './../about/about';
import { HomePage } from '../../pages/home/home';
import { LobbyPage } from '../../pages/lobby/lobby';
import { InscriptionPage } from '../../pages/inscription/inscription';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';



@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {
  pseudo: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socket: Socket ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

connexion(){
  this.socket.connect();
  this.socket.emit('set-nickname', this.pseudo);
  this.navCtrl.push(LobbyPage, {pseudo: this.pseudo});
  
}

inscription(){
  this.navCtrl.push(InscriptionPage);

}


}

