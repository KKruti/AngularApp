import {
    Component,
    Inject
} from '@angular/core';
import {
    Http,
    Headers
} from '@angular/http';
import {
    Router,
    ActivatedRoute
} from '@angular/router';
import { EmployeeService } from './employee.service';
@Component({
    selector: 'get-employee',
    templateUrl: './get-employee.component.html'
})
export class GetEmployeeComponent {
    public employeelist: EmployeeList[];
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {
        this.getEmployees();
    }
    getEmployees() {
        this._employeeService.getEmployees().subscribe(data => this.employeelist = data)
        console.log(this.employeelist);
    }
    delete(id) {
        var ans = confirm("Do you want to delete customer with Id: " + id);
        if (ans) {
            this._employeeService.deleteEmployee(id).subscribe((data) => {
                this.getEmployees();
            }, error => console.error(error))
        }
    }
}
interface EmployeeList {
    Id: number;
    LastName: string;
    FirstName: string;
    EmailId: string;
    Address: string;
    Qualification: string;
    Department: string;
}  