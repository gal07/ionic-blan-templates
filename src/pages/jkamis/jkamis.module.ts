import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JkamisPage } from './jkamis';

@NgModule({
  declarations: [
    JkamisPage,
  ],
  imports: [
    IonicPageModule.forChild(JkamisPage),
  ],
})
export class JkamisPageModule {}
