import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  dataSaved = false;
  employeeForm: any;
  allTickets: Observable<Ticket[]>;
  employeeIdUpdate = null;
  massage = null;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
   
    this.loadAllEmployees();
  }
  loadAllEmployees() {
    this.allTickets = this.ticketService.getAllTicket();
  }

  loadTicketsById(number: number) {
    this.allTickets = this.ticketService.getTicketsById(number);
    

  }

}
