import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LotteryService } from '../../services/lottery.service';
import { UserTicket } from '../../models/user-ticket';


@Component({
  selector: 'app-setwinner',
  templateUrl: './setwinner.component.html',
  styleUrls: ['./setwinner.component.css']
})
export class SetwinnerComponent implements OnInit {

 allUserTickets: Observable<UserTicket[]>;
ticketForm:any;
 message = null;

  constructor(private service: LotteryService,private _router:Router,private formbulider: FormBuilder) { }

  ngOnInit() {
    this.ticketForm = this.formbulider.group({
      Number: ['', [Validators.required]],
    });


   

    this.load();
  }
  load(){
this.allUserTickets= this.service.getUserTickets();
  }

  onFormSubmit() {
    //this.dataSaved = false;
    const ticket = this.ticketForm.value;
    console.log(ticket)
    this.service.setWinner(ticket.Number).subscribe(str => {
        this.message = str as string;
        });
    this.ticketForm.reset();

    this._router.navigate(['winners'])
  }

}
