import {
    Component,
    Inject
} from '@angular/core';
import {
    Http,
    Headers
} from '@angular/http';
import {
    EmployeeService
} from '../../services/employeeservices'
import {
    Router,
    ActivatedRoute
} from '@angular/router';
@Component({
    selector: 'employeedata',
    templateUrl: './employeedata.component.html'
})
export class EmployeeDataComponent {
    public employeelist: EmployeeList[];
    constructor(public http: Http, private _router: Router, private _employeeService: EmployeeService) {
        this.getEmployees();
    }
    getEmployees() {
        this._employeeService.getEmployees().subscribe(data => this.employeelist = data)
        console.log(this.employeelist);
    }
}
interface EmployeeList {
    Id: number;
    LastName: string;
    FirstName: string;
    EmailId: string;
    Address: string;
    Qualification: string;
    DepartmentId: number;
}  