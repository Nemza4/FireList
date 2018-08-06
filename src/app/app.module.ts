import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { AngularFireDatabaseModule,AngularFireDatabase} from 'angularfire2/database'; 

var config = {
  apiKey: "AIzaSyD2_WFneyd554fmghyiABxcANm3npw_Ql0",
  authDomain: "firelist-ca17e.firebaseapp.com",
  databaseURL: "https://firelist-ca17e.firebaseio.com",
  projectId: "firelist-ca17e",
  storageBucket: "firelist-ca17e.appspot.com",
  messagingSenderId: "608896352875"
};

@NgModule({
  declarations: [
    MyApp,
   
  ],
  imports: [
  
BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
