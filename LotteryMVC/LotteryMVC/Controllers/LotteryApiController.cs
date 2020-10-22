using LotteryMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace LotteryMVC.Controllers
{
    //[Authorize]
    public class LotteryApiController : ApiController
    {
        [Route("GetTickets")]
        public List<Ticket> GetTickets()
        {
            return LotteryModel._tickets;
        }
        [Route("GetBuyTicket")]
        public List<Ticket> GetBuyTicket(int number)
        {
            string email = "";//from auth,jwt

            var ticket = LotteryModel._tickets.First(x => x.Number == number);
            if (ticket.IsLocked == false && ticket.Available > 0)
            {
                //deduct SCC coin from user account
                LotteryModel._collectedFund += 5;//if ticket price 5 SCC

                ticket.Users += email + ",";
                ticket.Available = ticket.Available - 1;
                var userTicket = LotteryModel._userTicket.FirstOrDefault(x => x.Email == email && x.TicketNumber == number);
                if (userTicket == null)
                {
                    LotteryModel._userTicket.Add(new UserTicket { Email = email, TicketNumber = number });
                }
                else
                {
                    userTicket.TicketCount++;
                }
                LotteryModel.LockUnlock(ticket);
            }
            return LotteryModel._tickets;
        }
        [Route("GetUserTickets")]
        public List<UserTicket> GetUserTickets()
        {
            string email = "";//from auth,jwt
            return LotteryModel._userTicket.Where(x => x.Email == email).ToList();
        }


        [Route("SetWinner")]
        public List<UserTicket> SetWinner(int luckyNumber)
        {
            var ticket = LotteryModel._tickets.First(x => x.Number == luckyNumber);
            LotteryModel._totalWinningTicketSoldAtEnd = 100 - ticket.Available;
            //get winners
            LotteryModel._winnerTicketAtEnd = LotteryModel._userTicket.Where(x => x.TicketNumber == luckyNumber).ToList();
            //reset
            LotteryModel.Refresh();
            return LotteryModel._winnerTicketAtEnd;
        }
        [Route("GetWinners")]
        public List<UserTicket> GetWinners()
        {
            return LotteryModel._winnerTicketAtEnd;
        }
        [Route("GetTicketsStatus")]
        public List<UserTicket> GetTicketsStatus()
        {
            return LotteryModel._userTicket;
        }
    }
}