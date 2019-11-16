import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbsenPage } from '../absen/absen';
import { MatapelajaranPage } from '../matapelajaran/matapelajaran';
import { Matapelajaran2Page } from '../matapelajaran2/matapelajaran2';


/**
 * Generated class for the MenuabsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuabsen',
  templateUrl: 'menuabsen.html',
})
export class MenuabsenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuabsenPage');
    
  }

  goBack(){
    this.navCtrl.setRoot(MatapelajaranPage);
  }

  goBack2(){
    this.navCtrl.setRoot(Matapelajaran2Page);
  }
  

}
