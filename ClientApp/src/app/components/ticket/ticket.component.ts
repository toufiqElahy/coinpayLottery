import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LotteryService } from '../../services/lottery.service';
import { Ticket } from '../../models/ticket';

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

  constructor(private service: LotteryService) { }

  ngOnInit() {
   
    this.loadAllEmployees();
  }
  loadAllEmployees() {
    this.allTickets = this.service.getAllTicket();
  }

  loadTicketsById(number: number) {
    this.allTickets = this.service.getTicketsById(number);
    

  }

}
