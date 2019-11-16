import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JseninPage } from '../jsenin/jsenin';
import { JselasaPage } from '../jselasa/jselasa';
import { JrabuPage } from '../jrabu/jrabu';
import { JkamisPage } from '../jkamis/jkamis';
import { JjumatPage } from '../jjumat/jjumat';

/**
 * Generated class for the JadwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jadwal',
  templateUrl: 'jadwal.html',
})
export class JadwalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalPage');
  }


  onJseninPage(){
    this.navCtrl.push(JseninPage);

  }

  onJselasaPage(){
    this.navCtrl.push(JselasaPage);

  }

  onJrabuPage(){
    this.navCtrl.push(JrabuPage);

  }

  onJkamisPage(){
    this.navCtrl.push(JkamisPage);

  }

  onJjumatPage(){
    this.navCtrl.push(JjumatPage);

  }



}
