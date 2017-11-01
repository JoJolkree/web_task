using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PayService.Controllers
{
    public class BaseController<TRepository> : Controller
    {
	    protected TRepository Repository;
	    public BaseController(TRepository repository)
	    {
		    Repository = repository;
	    }
    }
}