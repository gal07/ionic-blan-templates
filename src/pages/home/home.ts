import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JadwalPage } from '../jadwal/jadwal';
import { AbsenPage } from '../absen/absen';
import { LihatnilaiPage } from '../lihatnilai/lihatnilai';
import { PengumumanPage } from '../pengumuman/pengumuman';
import { LihatabsenPage } from '../lihatabsen/lihatabsen';
import { P1Page } from '../p1/p1';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(
  public navCtrl: NavController,
  ) {


  }

  JadwalPage(){
    this.navCtrl.push(JadwalPage);
  }

  AbsenPage(){
    this.navCtrl.push(AbsenPage);
  }

  LihatnilaiPage(){
    this.navCtrl.push(LihatnilaiPage);
  }

  PengumumanPage(){
    this.navCtrl.push(PengumumanPage);
  }

  LihatabsenPage(){
    this.navCtrl.push(LihatabsenPage);
  }

  onP1Page(){
    this.navCtrl.push(P1Page);
  }


}
