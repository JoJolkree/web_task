using Microsoft.AspNetCore.Mvc;
using PayService.Model.DAL;

namespace PayService.Angular.Areas.Admin.Controllers
{
	[Area("Admin")]
    public class HomeController : Controller
    {
	    private readonly RequestsRepository _requestsRepository;
	    private readonly TransactionsRepository _transactionsRepository;

		public HomeController(RequestsRepository requestsRepo, TransactionsRepository transRepo)
		{
			_requestsRepository = requestsRepo;
			_transactionsRepository = transRepo;
		}

		[Route("/Admin/Transactions")]
        public IActionResult Transactions()
        {
            return View(_transactionsRepository.SortTransactionsBy("created"));
        }

	    [Route("/Admin/Transactions/Delete/{id}")]
	    public IActionResult DeleteTransaction(int id)
	    {
		    _transactionsRepository.RemoveTransaction(id);
		    return Redirect("/Admin/Requests");
	    }

		[Route("/Admin/Transactions/Sort/{field}")]
		public IActionResult SortTranBy(string field)
		{
			var list = _transactionsRepository.SortTransactionsBy(field);
			if (list == null)
				return Redirect("/Admin/Transactions");
			return View("Transactions", list);
		}

	    [Route("/Admin/Transactions/SortByDesc/{field}")]
	    public IActionResult SortTranByDesc(string field)
	    {
			var list = _transactionsRepository.SortTransactionsByDescending(field);
		    if (list == null)
			    return Redirect("/Admin/Transactions");
		    return View("Transactions", list);
		}

	    [Route("/Admin/Transactions/ChangeStatus/{id}/{status}")]
		public IActionResult ChangeStatus(int id, string status)
	    {
		    if (status != "Accepted" && status != "Illegal" && status != "Insecure") return Redirect("/Admin/Transactions");
			_transactionsRepository.ChangeStatusOfTransaction(id, status);
		    return Redirect("/Admin/Transactions");
		}

		[Route("/Admin/Requests")]
	    public IActionResult Requests()
	    {
		    return View(_requestsRepository.Sort("created"));
	    }

	    [Route("/Admin/Requests/Delete/{id}")]
	    public IActionResult DeleteRequest(int id)
	    {
		    _requestsRepository.RemoveRequest(id);
		    return Redirect("/Admin/Requests");
	    }

	    [Route("/Admin/Requests/Sort/{field}")]
	    public IActionResult SortRequestsBy(string field)
	    {
		    var list = _requestsRepository.Sort(field);
		    if (list == null)
			    return Redirect("/Admin/Requests");
		    return View("Requests", list);
	    }

	    [Route("/Admin/Requests/SortByDesc/{field}")]
	    public IActionResult SortRequestsByDesc(string field)
	    {
		    var list = _requestsRepository.SortByDescending(field);
		    if (list == null)
			    return Redirect("/Admin/Requests");
		    return View("Requests", list);
		}
	}
}