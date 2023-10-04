using Microsoft.AspNetCore.Mvc;

namespace Northwind.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() => View();
    }
}
  // this controller depends on the BloggingRepository
  // private DataContext _dataContext;
  // public HomeController(DataContext db) => _dataContext = db;

  // public IActionResult Index() => View(_dataContext.Categories);
