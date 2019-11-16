import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JadwalPage } from './jadwal';

@NgModule({
  declarations: [
    JadwalPage,
  ],
  imports: [
    IonicPageModule.forChild(JadwalPage),
  ],
})
export class JadwalPageModule {}
