using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LotteryMVC.Startup))]
namespace LotteryMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
