import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { UserTicket } from '../models/user-ticket';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {

  url = 'https://localhost:44353/LotteryApi';
  constructor(private http: HttpClient) { }
  getAllTicket(): Observable<Ticket[]> {
   
    return this.http.get<Ticket[]>(this.url + '/GetTickets');
  }

  getTicketsById(TicketId: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.url + '/GetBuyTicket?number=' + TicketId);
  }


  getUserTickets(): Observable<UserTicket[]> {
    return this.http.get<UserTicket[]>(this.url + '/GetUserTickets');
  }

  getTicketsStatus(): Observable<UserTicket[]> {
    return this.http.get<UserTicket[]>(this.url + '/GetTicketsStatus');
  }

  getWinners(): Observable<UserTicket[]> {
    return this.http.get<UserTicket[]>(this.url + '/GetWinners');
  }

  getAdminInfo(): Observable<Admin> {
    return this.http.get<Admin>(this.url + '/GetAdminInfo');
  }

setWinner(TicketId: number): Observable<string> {
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<string>(this.url + '/SetWinner?Number='+TicketId,null,httpOptions);
  }

  setWinner1(): Observable<UserTicket[]> {
    //console.log(Ticket.Number)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get<UserTicket[]>(this.url + '/SetWinner');
  }


////////
  updateTicket(Ticket: Ticket): Observable<Ticket> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    console.log(Ticket);
    return this.http.put<Ticket>(this.url + '/UpdateTicketDetails?number='+Ticket.Number,Ticket, httpOptions);
  }

  deleteTicketById(Ticketid: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/DeleteTicketDetails?id=' + Ticketid, httpOptions);
  }
}
