import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import {ProcessProvider} from './../../providers/process/process';



/**
 * Generated class for the JkamisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jkamis',
  templateUrl: 'jkamis.html',
})
export class JkamisPage {
  template:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ProcessProvider: ProcessProvider,
    public afauth: AngularFireAuth
    ) {
      this.ProcessProvider.getJadwal().subscribe(data =>{
        console.log(data)
        this.template = data
      }) 


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JkamisPage');
  }

}
