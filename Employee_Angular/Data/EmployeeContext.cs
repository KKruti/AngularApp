using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Employee_Angular.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options)
            : base(options)
        {
        }

        public DbSet<Employee_Angular.Models.tblEmployee> tblEmployee { get; set; }

        public DbSet<Employee_Angular.Models.tblDepartment> tblDepartment { get; set; }
    }
}
