import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { LotteryService } from '../../services/lottery.service';
import { UserTicket } from '../../models/user-ticket';

@Component({
  selector: 'app-user-ticket',
  templateUrl: './tickets-status.component.html',
  styleUrls: ['./tickets-status.component.css']
})
export class TicketsStatusComponent implements OnInit {

  allUserTickets: UserTicket[];

  constructor(private service: LotteryService) { }

  ngOnInit() {
   
    this.service.getTicketsStatus()
    .subscribe(userTicket => {
        this.allUserTickets = userTicket as UserTicket[]
    })
  }
  
  objectKey(obj) {
    
    return Object.keys(obj);
  }

  formatedCerts() {
    
      return this.allUserTickets.reduce((prev, now) => {
        if (!prev[now.TicketNumber]) {
          prev[now.TicketNumber] = [];
        }

        prev[now.TicketNumber].push(now);
        return prev;
      }, {});

  

  }

}
