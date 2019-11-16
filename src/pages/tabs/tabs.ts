import { JadwalSiswaPage } from './../jadwal-siswa/jadwal-siswa';
import { Component } from '@angular/core';
import { JadwalPage } from './../jadwal/jadwal';
import { NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { TentangkamiPage } from './../tentangkami/tentangkami';
import { IndexGuruPage } from '../index-guru/index-guru';
import { IndexSiswaPage } from '../index-siswa/index-siswa';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab2Root:any;
  tab3Root:any;
  tab4Root:any;
  tab5Root:any;
  tab6Root:any;
  tab7Root:any;

  roles = null;

  constructor( public params: NavParams ) {
    let tt = this.params.get('data');
    if (tt.role == 1) {
      this.tab2Root = HomePage;
      this.tab3Root = JadwalPage;
      this.tab4Root = IndexGuruPage;
      this.tab6Root = TentangkamiPage;
      this.roles = tt.role
    }else if(tt.role == 2){
      this.tab2Root = HomePage;
      this.tab5Root = JadwalSiswaPage;
      this.tab7Root = IndexSiswaPage;
      this.tab6Root = TentangkamiPage;
      this.roles = tt.role
    }else if(tt.role == 3){
      this.tab2Root = HomePage;
      this.tab5Root = JadwalSiswaPage;
      this.tab6Root = TentangkamiPage;
      this.tab7Root = IndexSiswaPage;
      this.roles = tt.role
    }


  }
}
