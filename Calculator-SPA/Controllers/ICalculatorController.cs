using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalculatorApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ICalculatorController : Controller
    {
        [HttpGet]
        public List<string> Get()
        {
            return new List<string> { "add", "sub", "mult", "div", "sqrt" };
        }

        [HttpGet("{opr}/{a}/{b}")]
        public ActionResult<double> Get(string opr, string a, string b)
        {
            double varA = System.Convert.ToDouble(a);
            double varB = System.Convert.ToDouble(b); 
            if (opr == "add")
            {
                return varA + varB;
            }
            else if (opr == "sub")
            {
                return varA - varB;
            }
            else if (opr == "mult")
            {
                return varA * varB;
            }
            else if (opr == "div")
            {
                if(varB == 0)
                {
                    return BadRequest();
                } else
                {
                    return varA / varB;
                }
            }
            else if (opr == "sqrt")
            {
                return Math.Sqrt(varA);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
