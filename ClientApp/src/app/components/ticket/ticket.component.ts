import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { LotteryService } from '../../services/lottery.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  
  allTickets: Observable<Ticket[]>;


  constructor(private service: LotteryService) { }

  ngOnInit() {
   
    this.load();
  }
  load() {
    this.allTickets = this.service.getAllTicket();
  }

  loadTicketsById(number: number) {
    this.allTickets = this.service.getTicketsById(number);
    

  }

}
