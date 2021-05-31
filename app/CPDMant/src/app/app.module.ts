import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from "@angular/forms"
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InMemoryCache} from '@apollo/client/core';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {IonicStorageModule} from '@ionic/storage-angular';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,   HttpClientModule, FormsModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Storage],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink, ) {
   apollo.create({
      link: httpLink.create({ uri: 'http://192.168.1.150:8000/graphql' }),
      cache: new InMemoryCache(),
    });
  }
}
