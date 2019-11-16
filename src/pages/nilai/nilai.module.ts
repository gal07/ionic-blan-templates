import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NilaiPage } from './nilai';

@NgModule({
  declarations: [
    NilaiPage,
  ],
  imports: [
    IonicPageModule.forChild(NilaiPage),
  ],
})
export class NilaiPageModule {}
