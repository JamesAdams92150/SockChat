import { ConnexionPage } from './../connexion/connexion';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ToastController, } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import {Observable} from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
  styleUrls: ['/src/pages/lobby/lobby.scss']
})

export class LobbyPage {
  @ViewChild(Content) content: Content

  messages = []; //Tableau de message
  nickname = ''; //pseudo user
  message = ''; //message saisie en cours
  pseudo = String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socket: Socket,
    private toastCtrl: ToastController ) {

      this.nickname = this.navParams.get('pseudo');

      this.getMessages().subscribe(message =>{
        this.messages.push(message);
      });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

  sendMessage(){
    if (this.message != "" && this.message != " ")
      this.socket.emit('message', this.message );
  }

  detectClavier(keyCode){
    alert('hey vikj');
}

  getMessages(){

    let observable = new Observable(observable =>{
      this.socket.on('message', (data) => {
        console.log(data);
        observable.next(data);
      });
    })
    return observable;
  }

fin(){
  this.content.scrollToBottom(0);
}

}


