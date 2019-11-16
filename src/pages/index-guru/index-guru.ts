import { ListSiswaPage } from './../list-siswa/list-siswa';
import { ListStudentPage } from './../list-student/list-student';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProcessProvider } from './../../providers/process/process';


/**
 * Generated class for the IndexGuruPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index-guru',
  templateUrl: 'index-guru.html',
})
export class IndexGuruPage {
  getEmail;
  getNIP = null;
  getmapel;
  mapel = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afauth: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public processProv:ProcessProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexGuruPage');

  }

  ionViewWillEnter(){


    // loader.dismiss()

  //  console.log(this.getmapel)
  //  console.log(this.mapel)

  }

  toList(){
    this.navCtrl.push(ListSiswaPage);
  }
}
