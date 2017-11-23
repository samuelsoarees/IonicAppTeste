import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  
  public obj_feed = {
    titulo : "Samuel Soares",
    data : "November 5 ,1995",
    descricao : "Este é meu aplicativo de teste...",
    qntd_likes : 12 ,
    qntd_comments : 4,
    time_comment : "11 hours ago"
  }

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number,num2:number):void{
    alert(num1+num2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    
  }

}
