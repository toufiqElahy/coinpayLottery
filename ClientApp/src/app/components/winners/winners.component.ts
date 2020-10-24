import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { LotteryService } from '../../services/lottery.service';
import { UserTicket } from '../../models/user-ticket';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {

  allUserTickets: Observable<UserTicket[]>;
  allWinnersTickets: UserTicket[];
  adminInfo: Admin;
winningticketNumber:string;

  constructor(private service: LotteryService) { }

  ngOnInit() {
   
    this.load();
  }
  load() {
    this.allUserTickets = this.service.getWinners();
    this.service.getAdminInfo().subscribe(admin => {
        this.adminInfo = admin as Admin[];
        });
    console.log(this.adminInfo);
    this.allUserTickets.subscribe(userTicket => {
        this.allWinnersTickets = userTicket as UserTicket[];
        
        this.winningticketNumber=(this.allWinnersTickets.length == 0) ? '0' : this.allWinnersTickets[0].TicketNumber+''; 
        this.winningticketNumber=this.winningticketNumber.length == 1 ? "0"+this.winningticketNumber : this.winningticketNumber;
    })
    
  }

}
