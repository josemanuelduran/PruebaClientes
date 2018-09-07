import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

import { CustomersListPageComponent } from '../pages/customer/customers-list/customers-list.component';

@Component({
  templateUrl: 'app.html'
})
export class MyAppComponent {
  rootPage: any = CustomersListPageComponent;

  constructor(
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      private translate: TranslateService,
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.initializeTranslateConfig();
  }

  private initializeTranslateConfig(): void {
    let userLang = navigator.language.split('-')[0];
    userLang = /(en|es)/gi.test(userLang) ? userLang : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(userLang);
    moment.locale(userLang);
}
}

