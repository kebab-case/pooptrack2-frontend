import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import { SearchPage } from '../search/search';
import { Tab4DefaultPagePage } from '../tab4default-page/tab4default-page';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AddPage;
  tab3Root: any = SearchPage;
  tab4Root: any = Tab4DefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
