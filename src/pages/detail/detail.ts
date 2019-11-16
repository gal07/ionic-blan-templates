import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcessProvider } from './../../providers/process/process';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  title='';
  mapel_detail = [];
  details:any;

  /** attr */
  h1 = 0;
  h2 = 0;
  h3 = 0;
  uts = 0;
  uas = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ProcessProvider:ProcessProvider) {
    this.title = this.navParams.get('data');

  }

  ionViewWillEnter(){
    let af = this.title.toLowerCase().replace(' ','_')
    this.ProcessProvider.getNilai().subscribe(data =>{
      data.forEach(element => {
        this.details = element.mapel[af]
      });

      this.h1 = this.details.h1;
      this.h2 = this.details.h2;
      this.h3 = this.details.h3;
      this.uts = this.details.uts;
      this.uas = this.details.uas;

    })


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
