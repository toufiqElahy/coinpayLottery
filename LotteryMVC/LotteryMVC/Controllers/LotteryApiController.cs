using LotteryMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace LotteryMVC.Controllers
{
    //[Authorize]
    [RoutePrefix("LotteryApi")]
    public class LotteryApiController : ApiController
    {
        [Route("GetTickets")]
        public List<Ticket> GetTickets()
        {
            return LotteryModel._tickets.Where(x=>x.IsLocked==false).ToList();
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
            return LotteryModel._tickets.Where(x => x.IsLocked == false).ToList();
        }
        [Route("GetUserTickets")]
        public List<UserTicket> GetUserTickets()
        {
            string email = "";//from auth,jwt
            return LotteryModel._userTicket.Where(x => x.Email == email).ToList();
        }


        [Route("SetWinner")]
        public string SetWinner(int Number)
        {
            var ticket = LotteryModel._tickets.First(x => x.Number == Number);
            LotteryModel._totalWinningTicketSoldAtEnd = 100 - ticket.Available;
            //get winners
            LotteryModel._winnerTicketAtEnd = LotteryModel._userTicket.Where(x => x.TicketNumber == Number).ToList();
            //reset
            LotteryModel.Refresh();
            return "Success..";
        }
        [Route("GetWinners")]
        public List<UserTicket> GetWinners()
        {
            return LotteryModel._winnerTicketAtEnd;
        }
        [Route("GetAdminInfo")]
        public AdminInfo GetAdminInfo()
        {
            return new AdminInfo {CollectedFundAtEnd=LotteryModel._collectedFundAtEnd,TotalWinningTicketSoldAtEnd=LotteryModel._totalWinningTicketSoldAtEnd };
        }
        [Route("GetTicketsStatus")]
        public List<UserTicket> GetTicketsStatus()
        {
            return LotteryModel._userTicket;
        }
    }
}