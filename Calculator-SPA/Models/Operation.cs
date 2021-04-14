using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

/* *
 * A model for holding a more comprehensive report of the operations availible.
 * */

namespace CalculatorApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Symbol { get; set; }
    }
}