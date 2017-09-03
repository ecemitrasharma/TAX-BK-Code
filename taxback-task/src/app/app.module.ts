import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import {CustomHttpService} from '../app/httpService/custom.sevice';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { UserComponent } from "./user/user.component";
import {DialogModule} from 'primeng/primeng';
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {MessagesModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MessagesModule
  ],
  providers: [CustomHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
