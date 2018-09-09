import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyAppComponent } from './app.component';
import {
    CustomersListPageComponent,
    CustomerDetailComponent,
    CustomerFormComponent,
    CustomerRecordComponent,
    ContactsListPageComponent,
    ContactFormComponent,
    ContactDetailComponent,
    TasksListPageComponent,
    TaskDetailComponent,
    TaskFormComponent,
    CustomersListFilterComponent,
    CustomersListItemComponent
} from '../pages';
import {
    CustomerService,
    ContactService,
    TaskService,
    MessagesService
} from '../providers';

@NgModule({
  declarations: [
    MyAppComponent,
    CustomersListPageComponent,
    ContactsListPageComponent,
    TasksListPageComponent,
    CustomerDetailComponent,
    CustomerFormComponent,
    ContactDetailComponent,
    ContactFormComponent,
    TaskDetailComponent,
    TaskFormComponent,
    CustomerRecordComponent,
    CustomersListFilterComponent,
    CustomersListItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyAppComponent),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    CustomersListPageComponent,
    ContactsListPageComponent,
    TasksListPageComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerService,
    ContactService,
    TaskService,
    MessagesService,
  ]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
