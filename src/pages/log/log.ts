import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {

  dataAbsen:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataAbsen = this.navParams.get('data')
    console.log(this.dataAbsen)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

  close(){
    this.navCtrl.pop();
  }

}
