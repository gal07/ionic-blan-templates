import { LogPage } from './../log/log';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController  } from 'ionic-angular';
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

  /* Keseluruhan */
  arrayslog = [];
  absens:any;
  absenHadir= [];
  harians:any;
  utsEnd:any;
  uasEnd:any;
  TotalEnd:any;
  TypeAbsen = {"hadir":[],"sakit":[],"izin":[],"alfa":[]};

  constructor(public navCtrl: NavController, public navParams: NavParams, public ProcessProvider:ProcessProvider,public modalCtrl: ModalController) {
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
      console.log(this.details.log_absen)

      /* Set For Absen */
      for (const key in this.details.log_absen) {
        this.arrayslog.push({tgl:key,absen:this.details.log_absen[key].toUpperCase()})
        if (this.details.log_absen[key] == 'hadir') {
          this.absenHadir.push(this.details.log_absen[key])
          this.TypeAbsen.hadir.push(this.details.log_absen[key])
        }

        if (this.details.log_absen[key] == 'sakit') {
          this.TypeAbsen.sakit.push(this.details.log_absen[key])
        }

        if (this.details.log_absen[key] == 'izin') {
          this.absenHadir.push(this.details.log_absen[key])
          this.TypeAbsen.izin.push(this.details.log_absen[key])
        }

        if (this.details.log_absen[key] == 'alfa') {
          this.absenHadir.push(this.details.log_absen[key])
          this.TypeAbsen.alfa.push(this.details.log_absen[key])
        }

      }


      
         /* Presentase Nilai Keseluruhan */

         // Absen
         let TotalAbsen = this.absenHadir.length
         this.absens = Math.round(TotalAbsen/14*10)
        //  console.log(this.TypeAbsen)
        //  console.log(this.TypeAbsen.sakit)
        //  console.log(this.TypeAbsen.izin)
        //  console.log(this.TypeAbsen.alfa)

         // Harian
         let totalharian = this.h1+this.h2+this.h3
         let finalTotalHarian = Math.round(totalharian/3)
         this.harians = Math.round(finalTotalHarian/100*20)

         // UTS
         this.utsEnd = Math.round(this.uts/100*30)

         // UAS
         this.uasEnd = Math.round(this.uas/100*40)

         // Total
         this.TotalEnd = this.absens + this.harians + this.utsEnd + this.uasEnd


        /* Presentase Nilai Keseluruhan */


    })


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  presentModal() {
    const modal = this.modalCtrl.create(LogPage,{data:{dataabsen:this.arrayslog}});
    modal.present();
  }

}
