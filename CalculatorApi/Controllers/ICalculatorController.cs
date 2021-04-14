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
            return new List<string> { "add", "divide" };
        }

        [HttpGet("{opr}/{a}/{b}")]
        public double Get(string opr, string a, string b)
        {
            double varA = System.Convert.ToDouble(a);
            double varB = System.Convert.ToDouble(b); 
            if (opr == "add")
            {
                return varA + varB;
            }
            else if (opr == "divide")
            {
                return varA / varB;
            }
            else
            {
                return 0;
            }
        }
    }
}
