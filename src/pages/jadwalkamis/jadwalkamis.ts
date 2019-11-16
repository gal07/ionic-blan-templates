import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProcessProvider} from './../../providers/process/process';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the JadwalkamisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jadwalkamis',
  templateUrl: 'jadwalkamis.html',
})
export class JadwalkamisPage {
  template:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ProcessProvider: ProcessProvider,
    public afauth: AngularFireAuth
    ) {
      this.ProcessProvider.getJsiswa().subscribe(data =>{
        console.log(data)
        this.template = data
      })
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalkamisPage');
  }

}
