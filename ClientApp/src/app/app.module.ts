import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LotteryService } from './services/lottery.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { UserTicketComponent } from './components/user-ticket/user-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    HeaderComponent,
    SidebarComponent,
    UserTicketComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  


    AppRoutingModule
  ],
  providers: [HttpClientModule, LotteryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
