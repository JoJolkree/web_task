using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PayService.Angular.Controllers
{
	[Route("/api/internet")]
    public class PayFromInternetController : Controller
    {
	    [HttpPost]
	    public IActionResult Post()
	    {
		    return File(HttpContext.Request.Body, "application/octet-stream", "request.txt");
	    }
    }
}