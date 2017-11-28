import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
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

 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private mvProvider : MovieProvider) {
  }

  ionViewDidLoad() {

    this.mvProvider.getLatestMovie().subscribe(
      data=>{
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
