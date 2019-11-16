import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuabsenPage } from '../menuabsen/menuabsen';

/**
 * Generated class for the Matapelajaran2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matapelajaran2',
  templateUrl: 'matapelajaran2.html',
})
export class Matapelajaran2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Matapelajaran2Page');
  }

  goBack(){
    this.navCtrl.setRoot(MenuabsenPage)
  }

}
