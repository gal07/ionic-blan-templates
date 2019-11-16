import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JadwalseninPage } from './../jadwalsenin/jadwalsenin';
import { JadwalselasaPage } from './../jadwalselasa/jadwalselasa';
import { JadwalrabuPage } from '../jadwalrabu/jadwalrabu';
import { JadwalkamisPage } from '../jadwalkamis/jadwalkamis';
import { JadwaljumatPage } from '../jadwaljumat/jadwaljumat';

/**
 * Generated class for the JadwalSiswaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jadwal-siswa',
  templateUrl: 'jadwal-siswa.html',
})
export class JadwalSiswaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalSiswaPage');
  }

  onJadwalseninPage(){
    this.navCtrl.push(JadwalseninPage);

  }

  onJadwalselasaPage(){
    this.navCtrl.push(JadwalselasaPage);

  }

  onJadwalrabuPage(){
    this.navCtrl.push(JadwalrabuPage);

  }

  onJadwalkamisPage(){
    this.navCtrl.push(JadwalkamisPage);

  }

  onJadwaljumatPage(){
    this.navCtrl.push(JadwaljumatPage);

  }
  
}
