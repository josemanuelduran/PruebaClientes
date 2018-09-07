import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyAppComponent } from './app.component';
import { CustomersListPageComponent } from '../pages/customer/customers-list/customers-list.component';
import { ContactsListPageComponent } from '../pages/contact/contacts-list/contacts-list.component';
import { TasksListPageComponent } from '../pages/task/tasks-list/tasks-list.component';
import { CustomerDetailComponent } from '../pages/customer/customer-detail/customer-detail.component';
import { CustomerFormComponent } from '../pages/customer/customer-form/customer-form.component';
import { ContactDetailComponent } from '../pages/contact/contact-detail/contact-detail.component';
import { ContactFormComponent } from '../pages/contact/contact-form/contact-form.component';
import { TaskDetailComponent } from '../pages/task/task-detail/task-detail.component';
import { TaskFormComponent } from '../pages/task/task-form/task-form.component';

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
