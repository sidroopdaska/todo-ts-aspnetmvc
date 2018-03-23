using Microsoft.AspNetCore.Mvc;

namespace TodoService.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}