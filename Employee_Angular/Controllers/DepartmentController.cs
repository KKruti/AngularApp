using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Employee_Angular.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Employee_Angular.Controllers
{
    public class DepartmentController : Controller
    {
        private readonly DataAccess _sql;
        public DepartmentController(DataAccess Access)
        {
            _sql = Access;
        }

        [HttpDelete]
        [Route("api/Department/Delete/{id}")]
        public int Delete(int id)
        {
            return _sql.DELETE(id, "Department");
        }

        [HttpGet]
        [Route("api/Department/Details/{id}")]
        public tblDepartment Details(int id)
        {
            return _sql.GET_DEPARTMENT(id);
        }

        [HttpPut]
        [Route("api/Department/Edit")]
        public int Edit([FromBody]tblDepartment _obj)
        {
            return _sql.SAVE_DEPARTMENT(_obj);
        }

        [HttpPost]
        [Route("api/Department/Create")]
        public int Create([FromBody]tblDepartment _dep)
        {
            return _sql.SAVE_DEPARTMENT(_dep);
        }
    }
}