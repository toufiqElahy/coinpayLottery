import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url = 'https://localhost:44353/LotteryApi';
  constructor(private http: HttpClient) { }
  getAllTicket(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.url + '/GetTickets');
  }

  getTicketsById(TicketId: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.url + '/GetBuyTicket?number=' + TicketId);
  }
  createTicket(Ticket: Ticket): Observable<Ticket> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Ticket>(this.url + '/InsertTicketDetails/', Ticket, httpOptions);
  }

  updateTicket(Ticket: Ticket): Observable<Ticket> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Ticket>(this.url + '/UpdateTicketDetails/', Ticket, httpOptions);
  }

  deleteTicketById(Ticketid: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/DeleteTicketDetails?id=' + Ticketid, httpOptions);
  }
}
