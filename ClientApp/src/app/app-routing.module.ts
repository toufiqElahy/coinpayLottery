import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './components/ticket/ticket.component';
import { UserTicketComponent } from './components/user-ticket/user-ticket.component';
import { TicketsStatusComponent } from './components/tickets-status/tickets-status.component';
import { WinnersComponent } from './components/winners/winners.component';

const routes: Routes = [
  { path: '', redirectTo: '/tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketComponent },
  { path: 'usertickets', component: UserTicketComponent },
  { path: 'ticketsstatus', component: TicketsStatusComponent },
  { path: 'winners', component: WinnersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
