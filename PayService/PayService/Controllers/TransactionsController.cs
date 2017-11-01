using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PayService.Controllers
{
    public class TransactionsController : BaseController<TransactionsController>
    {
	    public TransactionsController(TransactionsController repository) : base(repository)
	    {
	    }

	    [HttpPost]
	    [Route("/card-payment")]
	    public IActionResult AddCardPayment()
	    {
		    //Use ViewModel
	    }
    }
}