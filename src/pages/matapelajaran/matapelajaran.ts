import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuabsenPage } from '../menuabsen/menuabsen';

/**
 * Generated class for the MatapelajaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matapelajaran',
  templateUrl: 'matapelajaran.html',
})
export class MatapelajaranPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatapelajaranPage');
  }

  goBack(){
    this.navCtrl.setRoot(MenuabsenPage)
  }

}
