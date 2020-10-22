using LotteryMVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LotteryMVC.Controllers
{
    [Authorize]
    public class LotteryController : Controller
    {
        public ActionResult Index()
        {
            return View(LotteryModel._tickets);
        }
        public ActionResult BuyTicket(int number)
        {
            var ticket = LotteryModel._tickets.First(x => x.Number == number);
            if (ticket.IsLocked == false && ticket.Available > 0)
            {
                //deduct SCC coin from user account
                LotteryModel._collectedFund += 5;//if ticket price 5 SCC

                ticket.Users += User.Identity.Name + ",";
                ticket.Available = ticket.Available - 1;
                var userTicket = LotteryModel._userTicket.FirstOrDefault(x => x.Email == User.Identity.Name && x.TicketNumber == number);
                if (userTicket == null)
                {
                    LotteryModel._userTicket.Add(new UserTicket { Email = User.Identity.Name, TicketNumber = number });
                }
                else
                {
                    userTicket.TicketCount++;
                }
                LotteryModel.LockUnlock(ticket);
            }
            return RedirectToAction("Index");
        }
        public ActionResult UserTickets()
        {
            return View(LotteryModel._userTicket.Where(x => x.Email == User.Identity.Name).ToList());
        }


        public ActionResult SetWinner()
        {
            return View();
        }
        [HttpPost]
        public ActionResult SetWinner(int luckyNumber)
        {
            var ticket = LotteryModel._tickets.First(x => x.Number == luckyNumber);
            LotteryModel._totalWinningTicketSoldAtEnd = 100 - ticket.Available;
            //get winners
            LotteryModel._winnerTicketAtEnd = LotteryModel._userTicket.Where(x => x.TicketNumber == luckyNumber).ToList();
            //reset
            LotteryModel.Refresh();
            return RedirectToAction("Winners");
        }
        public ActionResult Winners()
        {
            return View(LotteryModel._winnerTicketAtEnd);
        }
        public ActionResult TicketsStatus()
        {
            return View(LotteryModel._userTicket);
        }
    }
}