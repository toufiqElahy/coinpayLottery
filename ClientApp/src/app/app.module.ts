import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TicketService } from './ticket.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  


    AppRoutingModule
  ],
  providers: [HttpClientModule, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
