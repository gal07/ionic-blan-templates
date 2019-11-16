import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSiswaPage } from './list-siswa';

@NgModule({
  declarations: [
    ListSiswaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListSiswaPage),
  ],
})
export class ListSiswaPageModule {}
