using Microsoft.AspNetCore.Mvc;

public class ProductController : Controller
{
  // this controller depends on the BloggingRepository
  private DataContext _dataContext;
  public ProductController(DataContext db) => _dataContext = db;

  public IActionResult Category() => View(_dataContext.Categories);

  public IActionResult Index(int id) => View(new ProductViewModel
  {
    category = _dataContext.Categories.FirstOrDefault(b => b.CategoryId == id),
    Products = _dataContext.Productss.Where(p => p.CategoryId == id && !p.Discontinued).OrderBy(p => p.ProductName)
  });

  // public IActionResult Index() => View(_dataContext.Categories);
}