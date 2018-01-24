using System;
using Microsoft.AspNetCore.Mvc;
using PayService.Model.Data;
using PayService.Model.DAL;

namespace PayService.Angular.Controllers
{
    [Produces("application/json")]
    [Route("api/requests")]
    public class RequestsController : Controller
    {
	    private readonly RequestsRepository _requestsRepository;

	    public RequestsController(RequestsRepository requestsRepository)
	    {
		    _requestsRepository = requestsRepository;
	    }

	    [HttpPost]
	    public IActionResult Post([FromBody] Request request)
	    {
		    if (ModelState.IsValid)
		    {
			    request.Created = DateTime.Now;
			    _requestsRepository.AddRequest(request);
			    return Ok(request);
		    }
		    return BadRequest();
	    }
    }
}