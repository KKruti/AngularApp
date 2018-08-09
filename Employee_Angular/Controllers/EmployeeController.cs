using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Employee_Angular.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Employee_Angular.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly DataAccess _sql;
        public EmployeeController(DataAccess Access)
        {
            _sql = Access;
        }

        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<tblEmployee> Index()
        {
            return _sql.GetAllEmployees();
        }

        [HttpPost]
        [Route("api/Employee/Create")]
        public int Create([FromBody] tblEmployee _emp)
        {
            return _sql.SAVE(_emp);
        }

        [HttpGet]
        [Route("api/Employee/Details/{id}")]
        public tblEmployee Details(int id)
        {
            return _sql.GET_EMPLOYEE(id);
        }

        [HttpPut]
        [Route("api/Employee/Edit")]
        public int Edit([FromBody]tblEmployee _obj)
        {
            return _sql.SAVE(_obj);
        }

        [HttpDelete]
        [Route("api/Employee/Delete/{id}")]
        public int Delete(int id)
        {
            return _sql.DELETE(id, "Employee");
        }

        [HttpGet]
        [Route("api/Employee/GetDepartment")]
        public IEnumerable<tblDepartment> GetDepartment()
        {
            return _sql.GET_DEPARTMENT_DLL();
        }
    }
}
