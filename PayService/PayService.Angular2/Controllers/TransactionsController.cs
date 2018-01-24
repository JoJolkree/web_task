using System;
using Microsoft.AspNetCore.Mvc;
using PayService.Model.Data;
using PayService.Model.DAL;

namespace PayService.Angular.Controllers
{
    [Produces("application/json")]
    [Route("api/transactions")]
    public class TransactionsController : Controller
    {
	    private readonly TransactionsRepository _transactionRepo;

	    public TransactionsController(TransactionsRepository transactionRepo)
	    {
		    _transactionRepo = transactionRepo;
	    }
		

	    [HttpPost]
	    public IActionResult Post([FromBody] Transaction transaction)
	    {
		    if (ModelState.IsValid)
		    {
			    transaction.Status = "Accepted";
				transaction.Created = DateTime.Now;
			    _transactionRepo.AddTransaction(transaction);
			    return Ok(transaction);
		    }
		    return BadRequest();
	    }
    }
}