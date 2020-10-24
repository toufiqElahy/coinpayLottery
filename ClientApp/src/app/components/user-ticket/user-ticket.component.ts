import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { LotteryService } from '../../services/lottery.service';
import { UserTicket } from '../../models/user-ticket';

@Component({
  selector: 'app-user-ticket',
  templateUrl: './user-ticket.component.html',
  styleUrls: ['./user-ticket.component.css']
})
export class UserTicketComponent implements OnInit {

  allUserTickets: Observable<UserTicket[]>;


  constructor(private service: LotteryService) { }

  ngOnInit() {
   
    this.load();
  }
  load() {
    this.allUserTickets = this.service.getUserTickets();
  }


}
