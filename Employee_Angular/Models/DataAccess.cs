using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Employee_Angular.Models
{
    public class DataAccess
    {
        private readonly EmployeeContext _context;

        public DataAccess(EmployeeContext context)
        {
            _context = context;
        }

        public IEnumerable<tblEmployee> GetAllEmployees()
        {
            try
            {
                var _data = (from c in _context.tblEmployee
                             join d in _context.tblDepartment
                             on c.DepartmentId equals d.Id
                             select new tblEmployee
                             {
                                 Id = c.Id,
                                 FirstName = c.FirstName,
                                 LastName = c.LastName,
                                 EmailId = c.EmailId,
                                 Department = d.DepartmentName,
                                 Address = c.Address,
                                 Qualification = c.Qualification
                             }).ToList();

                return _data;
            }
            catch
            {
                throw;
            }
        }

        public tblEmployee GET_EMPLOYEE(int ID)
        {
            try
            {
                return _context.tblEmployee.Where(x => x.Id == ID).SingleOrDefault();
            }
            catch
            {
                throw;
            }
        }

        public int DELETE(int ID, string KEY)
        {
            try
            {
                if (KEY == "Department")
                {
                    var _data = _context.tblDepartment.Where(x => x.Id == ID).SingleOrDefault();
                    _context.Remove(_data);
                    _context.SaveChanges();
                }
                else if (KEY == "Employee")
                {
                    var _data = _context.tblEmployee.Where(x => x.Id == ID).SingleOrDefault();
                    _context.Remove(_data);
                    _context.SaveChanges();
                }

                return 1;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public int SAVE(tblEmployee _emp)
        {
            tblEmployee _obj = new tblEmployee();
            if (_emp.Id == 0)
            {
                _obj.FirstName = _emp.FirstName;
                _obj.LastName = _emp.LastName;
                _obj.EmailId = _emp.EmailId;
                _obj.DepartmentId = _emp.DepartmentId;
                _obj.Address = _emp.Address;
                _obj.Qualification = _emp.Qualification;
                _context.tblEmployee.Add(_obj);
                _context.SaveChanges();
            }
            else
            {
                var _data = _context.tblEmployee.Where(x => x.Id == _emp.Id).SingleOrDefault();
                _data.FirstName = _emp.FirstName;
                _data.LastName = _emp.LastName;
                _data.EmailId = _emp.EmailId;
                _data.DepartmentId = _emp.DepartmentId;
                _data.Address = _emp.Address;
                _data.Qualification = _emp.Qualification;

                _context.SaveChanges();
            }
            return 1;
        }

        public IEnumerable<tblDepartment> GET_DEPARTMENT_DLL()
        {
            return _context.tblDepartment.ToList();
        }

        public tblDepartment GET_DEPARTMENT(int Id)
        {
            return _context.tblDepartment.Where(x => x.Id == Id).SingleOrDefault();
        }

        public int SAVE_DEPARTMENT(tblDepartment _dep)
        {
            tblDepartment _obj = new tblDepartment();
            if (_dep.Id == 0)
            {
                _obj.DepartmentName = _dep.DepartmentName;
                _context.tblDepartment.Add(_obj);
                _context.SaveChanges();
            }
            else
            {
                var _data = _context.tblDepartment.Where(x => x.Id == _dep.Id).SingleOrDefault();
                _data.DepartmentName = _dep.DepartmentName;
                _context.SaveChanges();
            }
            return 1;
        }
    }
}

