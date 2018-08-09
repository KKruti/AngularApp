using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_Angular.Models
{
    public class tblEmployee
    {
        public Int32 Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string EmailId { get; set; }

        public Int64 DepartmentId { get; set; }

        [NotMapped]
        public string Department { get; set; }

        public string Address { get; set; }

        public string Qualification { get; set; }
    }
}
